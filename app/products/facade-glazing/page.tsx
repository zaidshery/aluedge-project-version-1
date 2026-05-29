import React from "react";
import Image from "next/image";
import { Compass } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const facadeSolutions = [
  {
    name: "Unitized Curtain Wall Facades",
    desc: "Complete envelope panels pre-fabricated and double-sealed inside our factory, complete with structural glass and spandrel panels. Lifted and anchored onto floor brackets directly, speeding up site installation by 70%. Best choice for high-rise commercial structures.",
  },
  {
    name: "Semi-Unitized Curtain Wall Systems",
    desc: "Frame grids assembled at site (mullions and transoms anchored first), and glass panels fabricated in the shop and glazed in place. Extremely versatile and economical for mid-rise offices and premium towers.",
  },
  {
    name: "Spider & Tension Cable Glazing",
    desc: "Minimalist entrance lobby glazing utilizing heavy SS 316 stainless steel spider claws, tension rod grids, or structural glass fins. Delivers absolute transparency and architectural visual drama.",
  },
];

export const metadata = {
  title: "Structural Glazing & Curtain Wall Facades | AluEdge",
  description: "Advanced unitized, semi-unitized curtain wall facade systems, spider glass lobbies, structural glass fins and custom canopies engineered by AluEdge.",
};

export default function FacadeGlazingPage() {
  return (
    <>
      <PageHero
        eyebrow="Facades & Glazing"
        title="Architectural Glass Facades"
        description="Engineering massive structural glass building envelopes that withstand high wind pressure, satisfy high deflection tolerances, and maximize energy performance."
        actions={<Button href="/contact">Request Facade Consultation</Button>}
        media={(
          <Image
            alt="High-rise structural glass facade semi-unitized panels by AluEdge"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-facade-820.webp"
            priority
          />
        )}
      />

      <section className="container visual-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Facade envelope selection"
            title="High-Span Structural Engineering"
            description="Every building facade has unique loading characteristics. We consult closely with structural engineers to compute load tables, deflection metrics, and choose optimal anchoring brackets."
            className="mb-8"
          />

          <div className="space-y-5">
            {facadeSolutions.map((sol, idx) => (
              <ContentCard
                key={sol.name}
                eyebrow={`Facade system 0${idx + 1}`}
                title={sol.name}
                description={sol.desc}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Structural Details Card */}
        <div className="bg-paper border border-line rounded-lg p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,21,38,0.015)] space-y-6">
          <h3 className="font-display text-lg sm:text-xl text-ink font-bold">
            Facade Technical Parameters
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white border border-line rounded-lg p-4 sm:p-5 shadow-sm">
              <span className="text-[10px] block text-green font-black tracking-wider uppercase mb-1">Deflection Tolerance Limit</span>
              <strong className="text-sm text-ink block font-extrabold mt-1">L/175 deflection span rating</strong>
              <span className="text-xs text-muted block mt-1.5 leading-relaxed">
                Ensures that heavy architectural glass remains secure under extreme lateral load conditions.
              </span>
            </div>

            <div className="bg-white border border-line rounded-lg p-4 sm:p-5 shadow-sm">
              <span className="text-[10px] block text-green font-black tracking-wider uppercase mb-1">Thermal Expansion Isolation</span>
              <strong className="text-sm text-ink block font-extrabold mt-1">EPDM dynamic gasket isolation joints</strong>
              <span className="text-xs text-muted block mt-1.5 leading-relaxed">
                Prevents structural stress and joint rupture under extensive direct solar heating.
              </span>
            </div>

            <div className="bg-white border border-line rounded-lg p-4 sm:p-5 shadow-sm">
              <span className="text-[10px] block text-green font-black tracking-wider uppercase mb-1">Drainage & Pressure Equalization</span>
              <strong className="text-sm text-ink block font-extrabold mt-1">Mullion rainscreen pressure equalization</strong>
              <span className="text-xs text-muted block mt-1.5 leading-relaxed">
                Guarantees that wind-driven heavy monsoon rains drain out instantly, keeping joints dry.
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-center text-xs text-muted pt-2 border-t border-line/60">
            <Compass size={18} className="text-green flex-shrink-0" />
            <span>Fully compliant with strict ASTM, EN, and IS (Indian Standard) wind load norms.</span>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Architect & structural engineering desk"
        title="Ready to plan your high-performing building facade?"
        description="Connect directly with our Indore experience centre. We provide full wind load estimations, drawing check support, and structural anchoring proposals."
        actions={<Button href="/contact">Consult Facade Engineer</Button>}
        className="pt-0"
      />
    </>
  );
}
