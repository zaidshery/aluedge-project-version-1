import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, FlameKindling, Info } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const claddingOptions = [
  {
    name: "Aluminium Composite Panels (ACP) - Dry & Wet Joint Systems",
    desc: "Premium exterior ACP envelope systems using certified fire-retardant (FR Grade A2/B) cores. We coordinate the sub-structure framing, weather sealants, and dry-groove routing.",
    specs: ["Fire retardant cores", "AkzoNobel PVDF finishes"],
  },
  {
    name: "High-Pressure Laminates (HPL) Exterior Cladding",
    desc: "Extremely durable wood-grain and architectural color composite panels designed to resist harsh UV rays, rain, and heat, bringing warm finishes to villa facades and lobbies.",
    specs: ["UV resistant surface layer", "Ventilated rainscreen framing"],
  },
  {
    name: "Zinc & Honeycomb Metal Cladding Panels",
    desc: "Elite structural honeycomb core panels that offer extreme flatness over massive span heights, preventing deflection ('pillowing' effect). Ideal for signature corporate landmarks.",
    specs: ["Extreme visual flatness", "100% recyclable metal"],
  },
];

const ceilingSystems = [
  {
    name: "Linear Aluminium Open Ceilings",
    desc: "Sleek and clean linear ceiling panels designed for corporate lobbies, corridors, and high-use commercial spaces. Suspended framing integrates light strips and diffusers cleanly.",
  },
  {
    name: "Lay-in and Clip-in Metal Tile Ceilings",
    desc: "Acoustic-perforated rectangular tiles designed to allow easy maintenance of concealed service lines, combining functional ease with high sound damping.",
  },
];

export const metadata = {
  title: "Exterior Cladding & Interior Metal Ceilings | AluEdge",
  description: "High-performance ACP cladding, exterior HPL panels, structural honeycomb panels, and suspended metal ceilings engineered for fire safety and durability.",
};

export default function CladdingCeilingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cladding & Ceilings"
        title="Premium Metal Cladding & Ceilings"
        description="Durable, fire-certified architectural exterior panel systems and suspended interior metal ceilings planned for high-traffic environments and precise site coordination."
        actions={<Button href="/contact">Request Drawing Technical Check</Button>}
        media={(
          <Image
            alt="Architectural metallic cladding on office envelope"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-cladding-820.webp"
            priority
          />
        )}
      />

      <section className="container visual-section grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Exterior cladding systems"
            title="Durable Exterior Finishes"
            description="Exterior cladding acts as a protective shield against weather, wind, and heat. We fabricate cladding packages with custom sub-structures, ensuring adequate ventilation and thermal movement joints."
            className="mb-8"
          />

          <div className="space-y-5">
            {claddingOptions.map((c, idx) => (
              <ContentCard
                key={c.name}
                eyebrow={`Cladding option 0${idx + 1}`}
                title={c.name}
                description={c.desc}
                tags={c.specs}
              />
            ))}
          </div>
        </div>

        {/* Ceiling Systems and Technical Standards Card */}
        <div className="space-y-6 w-full">
          <div className="bg-paper border border-line rounded-lg p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,21,38,0.015)] space-y-6">
            <div>
              <p className="section-header__eyebrow">Interior systems</p>
              <h3 className="font-display text-xl text-ink font-semibold mt-2">Metal Ceiling Systems</h3>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Our commercial-grade suspended aluminium ceiling systems integrate lighting, air diffusers, and smoke detectors cleanly while delivering refined acoustic control.
            </p>

            <div className="divide-y divide-line pt-2">
              {ceilingSystems.map((ceil, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                  <strong className="text-sm sm:text-base text-ink font-extrabold block">{ceil.name}</strong>
                  <span className="text-xs sm:text-sm text-muted block leading-relaxed">{ceil.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fire Safety Highlight Card */}
          <div className="bg-gradient-to-br from-[#7a1515] via-[#5a1010] to-[#3a0b0b] text-white p-6 sm:p-8 rounded-lg shadow-xl flex gap-5 items-start border border-red-500/10">
            <FlameKindling size={36} className="text-bronze flex-shrink-0 mt-1" />
            <div className="space-y-1.5">
              <strong className="block text-sm sm:text-base text-white font-bold">FR Class A2 Fire Certification</strong>
              <span className="block text-xs sm:text-sm text-red-100/90 leading-relaxed">
                Our exterior ACP assemblies utilize non-combustible mineral-filled cores that prevent rapid flame spread under extreme heat conditions, fully compliant with structural fire guidelines.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Handover Quality highlights */}
      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <ContentCard title="AkzoNobel Coatings" description="PVDF finish paints that survive intensive salt spray tests and extreme tropical sun exposures." icon={<Award size={22} />} />
          <ContentCard title="EPDM Weather Gaskets" description="Superior weathering joints that maintain high elasticity over decades, avoiding air and water leakage." icon={<ShieldCheck size={22} />} />
          <ContentCard title="Sub-structure framing" description="Heavy-gauge galvanized steel or aluminium frame grids calculated strictly to resist deflection under high wind loads." icon={<Info size={22} />} />
        </div>
      </section>
    </>
  );
}
