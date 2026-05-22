import React from "react";
import Image from "next/image";
import { Snowflake, Volume2, ShieldAlert, CheckCircle } from "lucide-react";
import Button from "../../../components/Button";

const systems = [
  {
    name: "Elite Casement Series (Swing / Tilt & Turn)",
    desc: "Robust side-hung or tilt-and-turn window configurations featuring extreme water tightness and sound damping. Excellent choice for bedrooms and premium home applications.",
    depth: "65mm - 80mm profile depth",
    spec: "Acoustic damping up to 42 dB",
  },
  {
    name: "Ultra Slimline Minimalist Sliding",
    desc: "Minimalist floor-to-ceiling glass sliding doors with an interlocking vertical profile sightline of just 32mm. Frameless perimeter profiles deliver uninterrupted panoramas.",
    depth: "120mm double track depth",
    spec: "Profile sightline: 32mm",
  },
  {
    name: "Heavy-Duty Lift & Slide Patio Doors",
    desc: "Engineered to lift heavy panels off EPDM seals with high-leverage handles, rolling smoothly on stainless steel tracks. Capable of handling glass panels up to 400kg.",
    depth: "150mm - 210mm frame depth",
    spec: "Maximum sash size: 3.2m x 3.0m",
  },
];

const technicalSpecs = [
  { parameter: "Thermal Transmittance (U-Value)", value: "< 1.6 W/m²K (with Double Glazing)", standard: "EN ISO 10077-1" },
  { parameter: "Sound Reduction Rating (Acoustic)", value: "35 dB to 45 dB reduction levels", standard: "EN ISO 717-1" },
  { parameter: "Wind Load Deflection Rating", value: "Class 4 (up to 3.0 kPa resistance)", standard: "EN 12210" },
  { parameter: "Water Tightness Parameter", value: "Class 9A (up to 600 Pa pressure)", standard: "EN 12208" },
  { parameter: "Air Permeability Standard", value: "Class 4 (tight structural locking)", standard: "EN 12207" },
];

export const metadata = {
  title: "Premium Windows & Doors | AluEdge Architectural Systems",
  description: "Explore our collection of custom thermally broken aluminium and uPVC windows, sliding patio doors, tilt-turn windows and slimline minimal profiles.",
};

export default function WindowsDoorsPage() {
  return (
    <>
      {/* Product Hero */}
      <section className="bg-gradient-to-br from-[#061928] via-[#0c2b3f] to-[#04121d] text-white py-16 lg:py-24 border-b-4 border-bronze relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">WINDOWS & DOORS</span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mt-4 mb-6 leading-tight text-white">
              Precision Engineered Openings
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Advanced thermally-broken aluminium and uPVC fenestration systems planned for structural rigidity, thermal resistance, acoustic control, and seamless operability.
            </p>
            <div className="mt-8">
              <Button href="/contact">Get Customized Quote</Button>
            </div>
          </div>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-surface-strong">
            <Image
              alt="Premium slimline sliding glass doors opening to patio"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              src="/images/optimized/aluedge-solution-windows-820.webp"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product Variants Showcase */}
      <section className="container py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <span className="font-display tracking-widest text-xs font-black uppercase text-green">SYSTEM CONFIGURATIONS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">
            Apertures Designed for Modern Architecture
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed mt-3">
            Choose from a wide variety of casement, sliding, lift-sliding, and customized pivoting configurations tailored to your climate exposure and sightline intent.
          </p>
        </div>

        <div className="space-y-6">
          {systems.map((sys, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-surface-strong border border-line rounded-2xl items-start shadow-[0_4px_16px_rgba(7,21,38,0.01)] hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#eaf5ef] text-green flex items-center justify-center font-black text-sm flex-shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display text-lg sm:text-xl text-ink font-semibold tracking-tight">{sys.name}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{sys.desc}</p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs">
                  <span className="text-green font-extrabold">&bull; {sys.depth}</span>
                  <span className="text-bronze font-extrabold">&bull; {sys.spec}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications Matrix Table */}
      <section className="bg-paper border-t border-b border-line py-16 lg:py-24">
        <div className="container max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">ENGINEERING PERFORMANCE MATRIX</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">Certified Testing Parameters</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mt-3">
              AluEdge systems undergo testing and verification according to rigorous European standardizations.
            </p>
          </div>

          <div className="overflow-x-auto w-full rounded-2xl border border-line bg-white shadow-[0_8px_30px_rgba(7,21,38,0.015)]">
            <table className="w-full border-collapse text-left text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#071526] text-white border-b border-line">
                  <th className="py-4 px-6 font-black tracking-wider uppercase text-xs">Testing Parameter</th>
                  <th className="py-4 px-6 font-black tracking-wider uppercase text-xs">Certified Performance Value</th>
                  <th className="py-4 px-6 font-black tracking-wider uppercase text-xs">Standard Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {technicalSpecs.map((t, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors hover:bg-surface ${
                      idx % 2 === 0 ? "bg-[#fbfcfb]/80" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 font-extrabold text-ink">{t.parameter}</td>
                    <td className="py-4 px-6 text-green font-extrabold">{t.value}</td>
                    <td className="py-4 px-6 text-muted font-medium">{t.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Glazing Selection Guidance Section */}
      <section className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">GLASS TECHNOLOGY</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">Custom Glazing Configurations</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mt-4">
              Profiles are only as strong as the glass inside. We help you choose the right configurations to combat excessive sunlight, damp sound, and provide high security checks.
            </p>
            
            <div className="space-y-5 mt-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-green flex items-center justify-center flex-shrink-0">
                  <Snowflake size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink mb-0.5">Low-E Soft Coatings</h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">Reflects infrared heat while admitting visible light, slashing HVAC loads.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-green flex items-center justify-center flex-shrink-0">
                  <Volume2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink mb-0.5">Double-Pane Argon Gas</h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">Hermetically sealed spacers packed with heavy Argon gas damp acoustic transfer.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-green flex items-center justify-center flex-shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink mb-0.5">Laminated PVB Safety Glass</h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">Shatterproof interlayer PVB foil keeps glass held together under impact.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#071526] via-[#0d2536] to-[#04121d] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">ARCHITECT CONSULTATION</span>
            <h3 className="font-display text-2xl text-white mt-3 mb-4 font-semibold">Validate Your System Specs</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Provide your elevation drawings, structural layout, or wind load charts. Our engineering desk will calculate the required profile chambers and glass thickness.
            </p>
            <ul className="p-0 m-0 list-none space-y-3 mb-8 text-xs sm:text-sm text-blue-50">
              <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-bronze flex-shrink-0" /> Wind calculation per IS 875 standard</li>
              <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-bronze flex-shrink-0" /> Custom CAD corner drawing details</li>
              <li className="flex gap-3 items-center"><CheckCircle size={16} className="text-bronze flex-shrink-0" /> Detailed budgetary estimation reports</li>
            </ul>
            <Button href="/contact">Consult An Expert</Button>
          </div>
        </div>
      </section>
    </>
  );
}
