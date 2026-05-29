import React from "react";
import { Home, Building2, Layers, Wrench, Palette, ShieldCheck, Cpu } from "lucide-react";
import Button from "../../components/Button";
import ContentCard from "../../components/ContentCard";
import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";

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
      <PageHero
        eyebrow="AluEdge Solutions"
        title="High-Performance Architectural Systems"
        description="From precision doors to high-rise curtain walls, we fabricate and install advanced building envelopes that balance aesthetics with engineering performance."
        actions={<Button href="/contact">Request Spec Consultation</Button>}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="System families"
          title="One coordinated product language for every envelope package"
          description="Each family follows the same specification rhythm: image, system promise, core capabilities, and a clear action for consultation."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {productFamilies.map((item) => (
            <ContentCard
              key={item.title}
              eyebrow={item.tag}
              title={item.title}
              description={item.desc}
              image={item.image}
              imageAlt={item.title}
              icon={<item.Icon size={19} />}
            >
              <ul className="p-0 m-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 items-center text-xs sm:text-sm text-ink font-medium">
                    <ShieldCheck size={16} className="text-green flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-1">
                <Button href={item.href}>Deep-Dive Specifications</Button>
              </div>
            </ContentCard>
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Quality selection"
              title="Materials Engineered for Severe Exposures"
              description="We source high-grade primary aluminium billets, high-impact lead-free uPVC stabilizers, robust high-performance structural glass, and premium powder coatings backed by rigorous salt spray tests."
              className="mb-8"
            />
            <div>
              <Button href="/resources/material-guidance" variant="secondary">View Architect Material Guide</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContentCard
              title="European Hardware"
              description="Multi-point locks, concealed hinges, and heavy-duty roller tracks engineered for long lifespans."
              icon={<Cpu size={22} />}
            />
            <ContentCard
              title="Anodizing & RAL Finish"
              description="Premium architectural powder coatings with AkzoNobel, PPG, or Qualicoat class approvals."
              icon={<Palette size={22} />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
