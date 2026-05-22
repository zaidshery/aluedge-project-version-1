import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Building2, Layers, Wrench, Palette, ShieldCheck, Cpu } from "lucide-react";
import Button from "../../components/Button";

const productFamilies = [
  {
    title: "Doors & Windows Systems",
    desc: "Advanced openings and custom partitions engineered for excellent acoustics, thermal insulation, structural strength, and smooth daily operations.",
    Icon: Home,
    image: "/images/optimized/aluedge-solution-windows-820.webp",
    features: [
      "uPVC Doors & Windows (Soundproof & Thermal)",
      "Aluminium Doors & Windows (Sliding & Casement)",
      "Toughened Glass Doors (High Traffic)",
      "Modern Office Glass Partitions & Workspace Separators"
    ],
    href: "/contact",
    tag: "Fenestration",
  },
  {
    title: "Façade & Glazing Systems",
    desc: "Seamless, high-visibility structural glass exteriors and curtain walls engineered to satisfy modern high-rise load demands and design criteria.",
    Icon: Building2,
    image: "/images/optimized/aluedge-solution-facade-820.webp",
    features: [
      "Curtain Wall Systems (Semi-Unitized & Unitized)",
      "Structural Glazing (Seamless Glass)",
      "Spider Glazing & Frameless Glass Minimalist Systems"
    ],
    href: "/contact",
    tag: "Façades",
  },
  {
    title: "Cladding Solutions",
    desc: "High-finish exterior cladding systems engineered for extreme weather exposure and architectural organic depth.",
    Icon: Layers,
    image: "/images/optimized/aluedge-solution-cladding-820.webp",
    features: [
      "Aluminium Composite Panel Cladding (ACP)",
      "High-Pressure Laminate Cladding (HPL)",
      "Dry & Wet Stone/Tile Structural Cladding Solutions"
    ],
    href: "/contact",
    tag: "Envelopes",
  },
  {
    title: "Ceiling & Architectural Systems",
    desc: "Premium metal ceilings, grid ceilings, and specialized structural glass details built to elevate aesthetics, airflow control, and safety.",
    Icon: Wrench,
    image: "/images/optimized/aluedge-solution-ceiling-820.webp",
    features: [
      "Ceiling Systems (Metal & Grid False Ceilings)",
      "Glass Railings (Balcony Glass & Balustrades)",
      "Aluminium Louvers & Screen Façades (Airflow Control)"
    ],
    href: "/contact",
    tag: "Systems",
  },
];

export const metadata = {
  title: "Architectural Systems & Products | AluEdge",
  description: "Browse our complete range of premium aluminium and uPVC windows, curtain wall facades, composite cladding, linear ceilings, and minimalist railing systems.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero */}
      <section className="bg-gradient-to-br from-[#071526] via-[#0a2d42] to-[#04121d] text-white py-16 lg:py-24 border-b-4 border-bronze relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="container relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">ALUEDGE SOLUTIONS</span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mt-4 mb-6 leading-tight text-white">
              High-Performance Architectural Systems
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              From precision doors to high-rise curtain walls, we fabricate and install advanced building envelopes that balance aesthetics with engineering performance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact">Request Spec Consultation</Button>
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="container py-16 lg:py-24 space-y-12 sm:space-y-16">
        {productFamilies.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-surface-strong border border-line rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(7,21,38,0.02)]"
            >
              {/* Image Block */}
              <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden border border-line bg-surface-strong ${
                isEven ? "lg:order-1" : "lg:order-2"
              }`}>
                <Image 
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  src={item.image}
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-line rounded-full w-10 h-10 flex items-center justify-center text-ink shadow-sm">
                  <item.Icon size={18} />
                </span>
              </div>

              {/* Content Block */}
              <div className={`flex flex-col gap-5 sm:gap-6 ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}>
                <div>
                  <span className="bg-[#eaf5ef] text-green text-[10px] font-black tracking-widest uppercase rounded-full px-3 py-1 inline-block mb-3">
                    {item.tag}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold tracking-tight">
                    {item.title}
                  </h2>
                </div>
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
                
                <ul className="p-0 m-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-line/60 pt-5">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-2.5 items-center text-xs sm:text-sm text-ink font-medium">
                      <ShieldCheck size={16} className="text-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <Button href={item.href}>Deep-Dive Specifications</Button>
                  <Link 
                    href="/contact"
                    className="inline-flex min-h-12 items-center text-xs sm:text-sm font-black tracking-wider uppercase text-green hover:underline gap-1.5 transition-all duration-200"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Materials highlight banner */}
      <section className="bg-paper border-t border-b border-line py-16 lg:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">QUALITY SELECTION</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink leading-tight">
              Materials Engineered for Severe Exposures
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mt-4 mb-8">
              We source high-grade primary aluminium billets, high-impact lead-free uPVC stabilizers, robust high-performance structural glass (Low-E coatings, double/triple pane configurations), and premium powder coatings backed by rigorous salt spray tests.
            </p>
            <div>
              <Button href="/resources/material-guidance" variant="secondary">View Architect Material Guide</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-line rounded-2xl shadow-[0_8px_24px_rgba(7,21,38,0.01)] hover:shadow-md transition-shadow">
              <Cpu size={32} className="text-bronze mb-4" />
              <strong className="block text-sm sm:text-base text-ink mb-2 font-bold">European Hardware</strong>
              <span className="text-xs sm:text-sm text-muted leading-relaxed">
                Multi-point locks, concealed hinges, and heavy-duty roller tracks engineered for long lifespans.
              </span>
            </div>
            <div className="p-6 bg-white border border-line rounded-2xl shadow-[0_8px_24px_rgba(7,21,38,0.01)] hover:shadow-md transition-shadow">
              <Palette size={32} className="text-green mb-4" />
              <strong className="block text-sm sm:text-base text-ink mb-2 font-bold">Anodizing & RAL Finish</strong>
              <span className="text-xs sm:text-sm text-muted leading-relaxed">
                Premium architectural powder coatings with AkzoNobel, PPG, or Qualicoat class approvals.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
