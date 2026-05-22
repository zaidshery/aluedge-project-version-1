import React from "react";
import { Compass, ShieldCheck } from "lucide-react";
import Button from "../../../components/Button";

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
      {/* Guidance Hero */}
      <section className="bg-gradient-to-br from-[#071526] via-[#0d2536] to-[#04121d] text-white py-16 lg:py-24 border-b-4 border-bronze relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="container relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">ARCHITECT & ESTIMATOR DESK</span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mt-4 mb-6 leading-tight text-white">
              Material Guidance &amp; Specifications
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Technical references to guide architects, builders, and developers in selecting, specifying, and checking fenestration systems.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact">Download Concept CAD Drawings</Button>
          </div>
        </div>
      </section>

      {/* Wind Load Calculations Guide Section */}
      <section className="container py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Wind Load */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">STRUCTURAL CALCULATIONS</span>
            <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold tracking-tight mt-3 mb-4">
              Indian Basic Wind Speeds (per IS 875 Part 3)
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-8">
              Aperture framing must withstand lateral wind pressure based on geographic basic wind speed indices. High-rise installations require reinforced mullions to avoid structural deflection.
            </p>
          </div>

          <div className="overflow-x-auto w-full rounded-2xl border border-line shadow-[0_12px_36px_rgba(7,21,38,0.02)] bg-surface-strong">
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

        {/* Finishing Process Guidance: Powder Coating vs Anodizing */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">FINISHING DURABILITY</span>
            <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold tracking-tight mt-3 mb-4">
              Powder Coating vs. Anodizing
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-8">
              Aluminium extrusions require surface treatment to survive decades of coastal atmospheric dampness and severe UV radiation.
            </p>
          </div>

          <div className="overflow-x-auto w-full rounded-2xl border border-line shadow-[0_12px_36px_rgba(7,21,38,0.02)] bg-surface-strong">
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

      {/* Performance Glass Selection parameters */}
      <section className="bg-paper border-t border-b border-line py-16 lg:py-24">
        <div className="container max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">THERMAL & LIGHTING INDEX</span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-semibold tracking-tight mt-3 mb-4">
              Glass Performance Metrics Explained
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Architects must specify these three key parameters on all facade contracts to balance lighting and heat control.
            </p>
          </div>

          <div className="space-y-4">
            {glazingMetrics.map((g, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-line rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center shadow-[0_4px_16px_rgba(7,21,38,0.01)] hover:shadow-md transition-all duration-300 hover:border-bronze/25"
              >
                <div>
                  <strong className="font-display text-base sm:text-lg text-ink font-bold block mb-2">{g.metric}</strong>
                  <span className="text-muted text-xs sm:text-sm leading-relaxed">{g.desc}</span>
                </div>
                <div className="bg-[#eaf5ef] text-green border border-green/10 rounded-xl px-5 py-3 text-xs sm:text-sm font-black tracking-wide text-center min-w-[160px] md:self-center">
                  {g.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architect support CTA */}
      <section className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-br from-surface-strong to-surface border border-line rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(7,21,38,0.03)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-green" />
          <div className="lg:col-span-7 space-y-4">
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">SPECIFICATION CONSULTATION</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink font-semibold tracking-tight">
              Need Custom Corner CAD Details?
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-2xl">
              We collaborate with design teams during drawings stages. Our drafting center can supply corner sections, bracket layout blueprints, and wind calculation spreadsheets for reviews.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 items-start lg:pl-6 border-t lg:border-t-0 lg:border-l border-line/80 pt-6 lg:pt-0">
            <div className="flex gap-3 items-center text-xs sm:text-sm text-ink font-medium">
              <Compass size={18} className="text-green flex-shrink-0" />
              <span>IS 875 wind velocity and deflection validation</span>
            </div>
            <div className="flex gap-3 items-center text-xs sm:text-sm text-ink font-medium">
              <ShieldCheck size={18} className="text-green flex-shrink-0" />
              <span>Qualicoat / AkzoNobel powder coating specs support</span>
            </div>
            <div className="pt-2">
              <Button href="/contact">Request CAD Support</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
