const SHEET_NAME = "Website Enquiries";
const DEFAULT_NOTIFY_EMAIL = "aluedge.co@gmail.com";
const WEBHOOK_SECRET = "replace-with-the-same-secret-from-CONTACT_WEBHOOK_SECRET";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents || "{}");

    if (WEBHOOK_SECRET && data.secret !== WEBHOOK_SECRET) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const sheet = getOrCreateSheet();
    ensureHeaderRow(sheet);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.segment || "",
      data.area || "",
      data.budget || "",
      data.timeline || "",
      data.message || "",
      data.source || "",
    ]);

    const notifyEmail = data.notifyEmail || DEFAULT_NOTIFY_EMAIL;
    MailApp.sendEmail({
      to: notifyEmail,
      replyTo: data.email || notifyEmail,
      subject: `New AluEdge enquiry from ${data.name || "Website"}`,
      htmlBody: buildEmailHtml(data),
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Submitted At",
    "Name",
    "Email",
    "Phone",
    "Project Segment",
    "Approx. Glazing Area",
    "Target Quality / Budget",
    "Timeline",
    "Project Notes",
    "Source",
  ]);
}

function buildEmailHtml(data) {
  return `
    <h2>New AluEdge Website Enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Project Segment:</strong> ${escapeHtml(data.segment)}</p>
    <p><strong>Approx. Glazing Area:</strong> ${escapeHtml(data.area || "Not specified")}</p>
    <p><strong>Target Quality / Budget:</strong> ${escapeHtml(data.budget)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
    <p><strong>Project Notes:</strong><br>${escapeHtml(data.message || "No notes added").replace(/\n/g, "<br>")}</p>
  `;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
