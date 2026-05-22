import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, FlameKindling, Info } from "lucide-react";
import Button from "../../../components/Button";

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
      {/* Product Hero */}
      <section className="bg-gradient-to-br from-[#071526] via-[#0d2536] to-[#102a3a] text-white py-16 lg:py-24 border-b-4 border-bronze relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">CLADDING & CEILINGS</span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mt-4 mb-6 leading-tight text-white">
              Premium Metal Cladding &amp; Ceilings
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Durable, fire-certified architectural exterior panel systems and suspended interior metal ceilings planned for high-traffic environments and precise site coordination.
            </p>
            <div className="mt-8">
              <Button href="/contact">Request Drawing Technical Check</Button>
            </div>
          </div>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-surface-strong">
            <Image
              alt="Architectural metallic cladding on office envelope"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              src="/images/optimized/aluedge-solution-cladding-820.webp"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Cladding Options breakdown */}
      <section className="container py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">EXTERIOR CLADDING SYSTEMS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">
              Durable Exterior Finishes
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mt-3">
              Exterior cladding acts as a protective shield against weather, wind, and heat. We fabricate cladding packages with custom sub-structures, ensuring adequate ventilation and thermal movement joints.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {claddingOptions.map((c, idx) => (
              <div 
                key={idx} 
                className="bg-surface-strong border border-line rounded-2xl p-6 sm:p-8 space-y-4 shadow-[0_4px_12px_rgba(7,21,38,0.01)] hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-display text-lg text-ink font-semibold tracking-tight">{c.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {c.specs.map((spec, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[10px] font-black tracking-wider uppercase bg-[#f2faf5] border border-green/10 text-green rounded-full px-3.5 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ceiling Systems and Technical Standards Card */}
        <div className="space-y-6 w-full">
          <div className="bg-paper border border-line rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,21,38,0.015)] space-y-6">
            <div>
              <span className="font-display tracking-widest text-xs font-black uppercase text-green">INTERIOR SYSTEMS</span>
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
          <div className="bg-gradient-to-br from-[#7a1515] via-[#5a1010] to-[#3a0b0b] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex gap-5 items-start border border-red-500/10">
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
      <section className="bg-paper border-t border-b border-line py-16 lg:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <Award size={32} className="text-green" />
            <strong className="text-sm sm:text-base text-ink block font-bold">AkzoNobel Coatings</strong>
            <span className="text-xs sm:text-sm text-muted block leading-relaxed">
              PVDF finish paints that survive intensive salt spray tests and extreme tropical sun exposures.
            </span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck size={32} className="text-green" />
            <strong className="text-sm sm:text-base text-ink block font-bold">EPDM Weather Gaskets</strong>
            <span className="text-xs sm:text-sm text-muted block leading-relaxed">
              Superior weathering joints that maintain high elasticity over decades, avoiding air and water leakage.
            </span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <Info size={32} className="text-green" />
            <strong className="text-sm sm:text-base text-ink block font-bold">Sub-structure framing</strong>
            <span className="text-xs sm:text-sm text-muted block leading-relaxed">
              Heavy-gauge galvanized steel or aluminium frame grids calculated strictly to resist deflection under high wind loads.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
