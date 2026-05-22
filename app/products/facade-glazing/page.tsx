import React from "react";
import Image from "next/image";
import { Compass } from "lucide-react";
import Button from "../../../components/Button";

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
      {/* Product Hero */}
      <section className="bg-gradient-to-br from-[#071526] via-[#0c2b3d] to-[#04121d] text-white py-16 lg:py-24 border-b-4 border-bronze relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">FACADES & GLAZING</span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mt-4 mb-6 leading-tight text-white">
              Architectural Glass Facades
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Engineering massive structural glass building envelopes that withstand high wind pressure, satisfy high deflection tolerances, and maximize energy performance.
            </p>
            <div className="mt-8">
              <Button href="/contact">Request Facade Consultation</Button>
            </div>
          </div>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-surface-strong">
            <Image
              alt="High-rise structural glass facade semi-unitized panels by AluEdge"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              src="/images/optimized/aluedge-solution-facade-820.webp"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Facade Systems breakdown */}
      <section className="container py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">FACADE ENVELOPE SELECTION</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">
              High-Span Structural Engineering
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mt-3">
              Every building facade has unique loading characteristics. We consult closely with structural engineers to compute load tables, deflection metrics, and choose optimal anchoring brackets.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {facadeSolutions.map((sol, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#eaf5ef] text-green flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-base text-ink font-bold">{sol.name}</h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Structural Details Card */}
        <div className="bg-paper border border-line rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(7,21,38,0.015)] space-y-6">
          <h3 className="font-display text-lg sm:text-xl text-ink font-bold">
            Facade Technical Parameters
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white border border-line rounded-xl p-4 sm:p-5 shadow-sm">
              <span className="text-[10px] block text-green font-black tracking-wider uppercase mb-1">Deflection Tolerance Limit</span>
              <strong className="text-sm text-ink block font-extrabold mt-1">L/175 deflection span rating</strong>
              <span className="text-xs text-muted block mt-1.5 leading-relaxed">
                Ensures that heavy architectural glass remains secure under extreme lateral load conditions.
              </span>
            </div>

            <div className="bg-white border border-line rounded-xl p-4 sm:p-5 shadow-sm">
              <span className="text-[10px] block text-green font-black tracking-wider uppercase mb-1">Thermal Expansion Isolation</span>
              <strong className="text-sm text-ink block font-extrabold mt-1">EPDM dynamic gasket isolation joints</strong>
              <span className="text-xs text-muted block mt-1.5 leading-relaxed">
                Prevents structural stress and joint rupture under extensive direct solar heating.
              </span>
            </div>

            <div className="bg-white border border-line rounded-xl p-4 sm:p-5 shadow-sm">
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

      {/* CTA Box */}
      <section className="container pb-16 lg:pb-24">
        <div className="bg-gradient-to-br from-[#071526] via-[#0d2536] to-[#04121d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border border-white/5">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">ARCHITECT & STRUCTURAL ENGINEERING DESK</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mt-3 mb-4 leading-tight">
              Ready to plan your high-performing building facade?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Connect directly with our Hyderabad engineering office. We provide full wind load estimations, drawing check support, and structural anchoring proposals.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
            <Button href="/contact">Consult Facade Engineer</Button>
          </div>
        </div>
      </section>
    </>
  );
}
