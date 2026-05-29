import React from "react";
import Image from "next/image";
import { Snowflake, Volume2, ShieldAlert, CheckCircle } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

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
      <PageHero
        eyebrow="Windows & Doors"
        title="Precision Engineered Openings"
        description="Advanced thermally-broken aluminium and uPVC fenestration systems planned for structural rigidity, thermal resistance, acoustic control, and seamless operability."
        actions={<Button href="/contact">Get Customized Quote</Button>}
        media={(
          <Image
            alt="Premium slimline sliding glass doors opening to patio"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-windows-820.webp"
            priority
          />
        )}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="System configurations"
          title="Apertures Designed for Modern Architecture"
          description="Choose from a wide variety of casement, sliding, lift-sliding, and customized pivoting configurations tailored to your climate exposure and sightline intent."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((sys, idx) => (
            <ContentCard
              key={sys.name}
              eyebrow={`Configuration 0${idx + 1}`}
              title={sys.name}
              description={sys.desc}
              tags={[sys.depth, sys.spec]}
            />
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Engineering performance matrix"
            title="Certified Testing Parameters"
            description="AluEdge systems undergo testing and verification according to rigorous European standardizations."
            align="center"
          />

          <div className="overflow-x-auto w-full rounded-lg border border-line bg-white shadow-[0_8px_30px_rgba(7,21,38,0.015)]">
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
      <section className="container visual-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Glass technology"
              title="Custom Glazing Configurations"
              description="Profiles are only as strong as the glass inside. We help you choose the right configurations to combat excessive sunlight, damp sound, and provide high security checks."
              className="mb-8"
            />
            
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
