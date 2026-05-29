import React from "react";
import Image from "next/image";
import { ShieldCheck, Compass, Info } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const solutions = [
  {
    name: "Minimalist Glass Railing (Base Profile System)",
    desc: "A clean architectural glass balustrade secured inside a heavy-duty extruded aluminium base channel. Channels can be recessed into the floor slab for a completely frameless finish.",
    specs: ["12mm to 19mm PVB laminated glass", "Heavy-gauge anodized base channels"],
  },
  {
    name: "Point-Fixed (Button Glass) Balustrades",
    desc: "Stainless steel 316 heavy-duty point anchors ('buttons') bolted directly onto vertical concrete slabs. Ideal for staircases, landing bridges, and narrow balconies to maximize space.",
    specs: ["Polished or satin SS 316 anchors", "Requires precise pre-drilled glass panels"],
  },
  {
    name: "Premium Composite Exterior Decking",
    desc: "Weather-resistant wood-plastic composite (WPC) decking boards designed for patios, poolside decks, and open architectural rooftops. Resists decay, insect attacks, and warping.",
    specs: ["Hidden clip fastening system", "No-splinter slip-resistant finish"],
  },
];

export const metadata = {
  title: "Glass Railing Balustrades & Exterior Decking | AluEdge",
  description: "Minimalist frameless glass railings, point-fixed glass stairs balustrades, and highly durable composite decking systems engineered by AluEdge.",
};

export default function RailingDeckingPage() {
  return (
    <>
      <PageHero
        eyebrow="Railing & Decking"
        title="Refined Exterior Safety Details"
        description="Balancing minimalist aesthetic sightlines with strict structural loading safety criteria. We provide frameless glass railings and weather-proof composite decking."
        actions={<Button href="/contact">Request Drawing Technical Check</Button>}
        media={(
          <Image
            alt="Frameless glass balustrade looking out to sea landscape"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-railing-820.webp"
            priority
          />
        )}
      />

      <section className="container visual-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Railing & decking configurations"
            title="Minimalist Details That Satisfy Safety Codes"
            description="Balustrades are subject to heavy lateral pressure from crowds and wind. We engineer base channels, anchoring anchors, and laminated glass thickness to guarantee absolute compliance."
          />

          <div className="space-y-6">
            {solutions.map((sol, idx) => (
              <ContentCard
                key={sol.name}
                eyebrow={`Safety detail 0${idx + 1}`}
                title={sol.name}
                description={sol.desc}
                tags={sol.specs}
              />
            ))}
          </div>
        </div>

        {/* Engineering Standards Card */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-paper border border-line rounded-lg p-8 shadow-[0_12px_36px_rgba(7,21,38,0.02)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-green" />
            <span className="font-display tracking-widest text-[10px] font-black uppercase text-green">BALUSTRADE SAFETY</span>
            <h3 className="font-display text-xl text-ink font-bold mt-3 mb-4">Line Load Deflection</h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
              Our glass railings are engineered to withstand horizontal line loads up to <strong>1.5 kN/m</strong>, which makes them highly certified for crowded commercial and luxury residential use.
            </p>

            <div className="space-y-4 pt-4 border-t border-line/60">
              <div className="flex gap-3 items-start">
                <ShieldCheck size={18} className="text-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-ink leading-relaxed font-medium">Double laminated tempered safety glass with PVB or SGP ionoplast interlayers.</span>
              </div>
              <div className="flex gap-3 items-start">
                <Compass size={18} className="text-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-ink leading-relaxed font-medium">Base profiles anchored using heavy anchor bolts into RCC slabs directly.</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-surface border border-line rounded-lg flex gap-4 transition-all duration-300 hover:border-green/30">
            <Info size={24} className="text-green flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-display text-sm sm:text-base text-ink font-bold block mb-1.5">WPC Wood Composites</strong>
              <span className="text-muted text-xs sm:text-sm block leading-relaxed">
                WPC composite decking avoids warp, splitter cracks, and decay over decades, delivering absolute zero maintenance deck finishes.
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
