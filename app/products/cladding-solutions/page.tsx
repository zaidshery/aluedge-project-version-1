import React from "react";
import Image from "next/image";
import { FlameKindling, Layers, ShieldCheck } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const systems = [
  {
    title: "ACP Cladding",
    description: "Aluminium composite panel cladding with clean grooves, durable finishes, and coordinated sub-structure support.",
    tags: ["Exterior envelopes", "PVDF finishes"],
  },
  {
    title: "HPL Cladding",
    description: "High-pressure laminate panels for warm architectural textures, rainscreen applications, and long-term exterior durability.",
    tags: ["Wood finishes", "Weather resistant"],
  },
  {
    title: "Stone & Tile Cladding",
    description: "Dry and wet cladding systems for premium elevations, lobbies, and durable public-facing surfaces.",
    tags: ["Premium finish", "Structural support"],
  },
];

export const metadata = {
  title: "Cladding Solutions | AluEdge",
  description: "ACP, HPL, stone, tile, and exterior cladding solutions for modern building envelopes by AluEdge.",
};

export default function CladdingSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product category"
        title="Cladding Solutions"
        description="Exterior cladding packages planned for weather resistance, visual flatness, fire safety, ventilation, and precise installation detailing."
        actions={<Button href="/contact">Request Cladding Quote</Button>}
        media={(
          <Image
            alt="AluEdge exterior cladding solution"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-cladding-820.webp"
          />
        )}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="Exterior cladding"
          title="Durable Finishes for Modern Envelopes"
          description="We coordinate panels, framing, sealants, grooves, and expansion joints so the exterior finish performs as well as it looks."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <ContentCard key={system.title} title={system.title} description={system.description} icon={<Layers size={22} />} tags={system.tags} />
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="Fire-Safe Material Selection" description="FR grade cores and project-appropriate panel specifications can be selected for safer exterior assemblies." icon={<FlameKindling size={22} />} />
          <ContentCard title="Sub-Structure Coordination" description="Aluminium or galvanized framing is planned for alignment, ventilation, panel movement, and wind exposure." icon={<ShieldCheck size={22} />} />
        </div>
      </section>

      <CTASection
        title="Planning an exterior cladding package?"
        description="Send your elevation design and finish preference. We will help select the right cladding system."
        actions={<Button href="/contact">Get Free Quote</Button>}
      />
    </>
  );
}
