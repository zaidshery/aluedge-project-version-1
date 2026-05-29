import React from "react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const windLoads = [
  { city: "Hyderabad, Telangana", speed: "44 m/s (Basic Wind Speed)", pressure: "1.2 kPa to 1.8 kPa (Standard Height)", spec: "AluEdge Medium-Span Framing" },
  { city: "Mumbai, Maharashtra (Coastal)", speed: "44 m/s (Coastal Damping)", pressure: "1.8 kPa to 2.8 kPa (Severe Coastal Load)", spec: "AluEdge Coastal High-Span Series" },
  { city: "New Delhi (NCR)", speed: "47 m/s (Basic Wind Speed)", pressure: "1.5 kPa to 2.2 kPa (Standard Height)", spec: "AluEdge Medium-to-High Framing" },
  { city: "Bengaluru, Karnataka", speed: "33 m/s (Lower Exposure)", pressure: "0.8 kPa to 1.2 kPa", spec: "AluEdge Slimline Standard Series" },
];

const finishComparison = [
  { feature: "Primary Coating Process", powder: "Electrostatic deposition of dry paint powder, baked to cure.", anodizing: "Electrochemical conversion of surface into aluminium oxide layer." },
  { feature: "RAL Colors & Textures", powder: "Virtually unlimited RAL colors, metallic textures, wood-grain.", anodizing: "Limited to bronze, copper, champagne, black, silver shades." },
  { feature: "Severe Coastal Durability", powder: "Excellent with AkzoNobel or Qualicoat Class 2/3 approvals.", anodizing: "Extremely high. Oxidic skin cannot chip, peel or rust." },
  { feature: "Scratch Deflection Rating", powder: "Good flexibility under structural load stress.", anodizing: "Extremely hard metallic armor. Superior abrasion checks." },
];

const glazingMetrics = [
  { metric: "U-Value (Thermal Transmittance)", desc: "Measures heat loss. Lower U-value means superior room thermal retention.", target: "< 1.6 W/m²K (with Argon double pane)" },
  { metric: "Solar Heat Gain Coefficient (SHGC)", desc: "Fraction of solar radiation entering the room. Lower SHGC limits solar heating.", target: "0.22 to 0.35 (for warm Indian climates)" },
  { metric: "Visible Light Transmittance (VLT)", desc: "Percentage of daylight entering through glass. Higher VLT maximizes room daylight.", target: "45% to 60% (balances daylight & glare)" },
];

export const metadata = {
  title: "Material Guidance & Architect Specs | AluEdge",
  description: "Technical specifier resources including basic wind speed pressure maps, powder coating vs anodizing durability, and performance parameters for glass selection.",
};

export default function MaterialGuidancePage() {
  return (
    <>
      <PageHero
        eyebrow="Architect & Estimator Desk"
        title="Material Guidance & Specifications"
        description="Technical references to guide architects, builders, and developers in selecting, specifying, and checking fenestration systems."
        actions={<Button href="/contact">Download Concept CAD Drawings</Button>}
      />

      <section className="container visual-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="flex flex-col h-full justify-between">
          <SectionHeader
            eyebrow="Structural calculations"
            title="Indian Basic Wind Speeds (per IS 875 Part 3)"
            description="Aperture framing must withstand lateral wind pressure based on geographic basic wind speed indices. High-rise installations require reinforced mullions to avoid structural deflection."
            className="mb-8"
          />

          <div className="overflow-x-auto w-full rounded-lg border border-line shadow-[0_12px_36px_rgba(7,21,38,0.02)] bg-surface-strong">
            <table className="w-full border-collapse text-xs sm:text-sm text-left min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-display uppercase tracking-wider text-[10px]">
                  <th className="p-4 font-semibold">Geographic Zone</th>
                  <th className="p-4 font-semibold">Basic Wind Speed</th>
                  <th className="p-4 font-semibold">Profile Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {windLoads.map((w, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-line hover:bg-surface transition-colors duration-150"
                  >
                    <td className="p-4 font-bold text-ink">{w.city}</td>
                    <td className="p-4 text-muted">{w.speed}</td>
                    <td className="p-4 text-green font-bold">{w.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col h-full justify-between">
          <SectionHeader
            eyebrow="Finishing durability"
            title="Powder Coating vs. Anodizing"
            description="Aluminium extrusions require surface treatment to survive decades of coastal atmospheric dampness and severe UV radiation."
            className="mb-8"
          />

          <div className="overflow-x-auto w-full rounded-lg border border-line shadow-[0_12px_36px_rgba(7,21,38,0.02)] bg-surface-strong">
            <table className="w-full border-collapse text-xs sm:text-sm text-left min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-display uppercase tracking-wider text-[10px]">
                  <th className="p-4 font-semibold">Process Characteristic</th>
                  <th className="p-4 font-semibold">Powder Coating (PVDF)</th>
                  <th className="p-4 font-semibold">Anodized Metal Finish</th>
                </tr>
              </thead>
              <tbody>
                {finishComparison.map((f, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-line hover:bg-surface transition-colors duration-150"
                  >
                    <td className="p-4 font-bold text-ink">{f.feature}</td>
                    <td className="p-4 text-muted leading-relaxed">{f.powder}</td>
                    <td className="p-4 text-muted leading-relaxed">{f.anodizing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Thermal & lighting index"
            title="Glass Performance Metrics Explained"
            description="Architects must specify these three key parameters on all facade contracts to balance lighting and heat control."
            align="center"
          />

          <div className="space-y-4">
            {glazingMetrics.map((g, idx) => (
              <ContentCard
                key={idx}
                title={g.metric}
                description={g.desc}
                tags={[g.target]}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Specification consultation"
        title="Need Custom Corner CAD Details?"
        description="We collaborate with design teams during drawings stages. Our drafting center can supply corner sections, bracket layout blueprints, and wind calculation spreadsheets for reviews."
        bullets={[
          "IS 875 wind velocity and deflection validation",
          "Qualicoat / AkzoNobel powder coating specs support",
        ]}
        actions={<Button href="/contact">Request CAD Support</Button>}
      />
    </>
  );
}
