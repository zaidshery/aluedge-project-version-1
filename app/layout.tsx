import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AluEdge Fenestration Solutions",
  description:
    "Premium windows, doors, facades, cladding and architectural fenestration solutions across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
