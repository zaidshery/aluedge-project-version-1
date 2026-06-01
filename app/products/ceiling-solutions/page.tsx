import React from "react";
import Image from "next/image";
import { Grid2X2, ShieldCheck, Wrench } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const systems = [
  {
    title: "Linear Aluminium Ceilings",
    description: "Clean linear ceiling systems for corridors, lobbies, commercial interiors, and contemporary hospitality spaces.",
    tags: ["Linear look", "Integrated services"],
  },
  {
    title: "Clip-in Metal Tile Ceilings",
    description: "Durable metal tile ceilings with easy access for maintenance and a crisp modular finish.",
    tags: ["Service access", "Commercial interiors"],
  },
  {
    title: "Grid False Ceilings",
    description: "Practical grid ceiling systems for offices, institutions, and high-use interior environments.",
    tags: ["Fast installation", "Clean maintenance"],
  },
];

export const metadata = {
  title: "Ceiling Solutions | AluEdge",
  description: "Metal ceiling, linear aluminium ceiling, clip-in tile, and grid false ceiling solutions by AluEdge.",
};

export default function CeilingSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product category"
        title="Ceiling Solutions"
        description="Interior ceiling systems designed for clean finish quality, acoustic comfort, service integration, and dependable project execution."
        actions={<Button href="/contact">Request Ceiling Quote</Button>}
        media={(
          <Image
            alt="AluEdge ceiling solution"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-ceiling-820.webp"
          />
        )}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="Interior ceiling systems"
          title="Refined Ceilings for Commercial Interiors"
          description="We help coordinate ceiling panels, suspension systems, lighting, air diffusers, and maintenance access for polished interior execution."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <ContentCard key={system.title} title={system.title} description={system.description} icon={<Wrench size={22} />} tags={system.tags} />
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="Modular Coordination" description="Ceiling grids and panels are planned around lights, HVAC outlets, sprinklers, and access requirements." icon={<Grid2X2 size={22} />} />
          <ContentCard title="Durable Finish Quality" description="Metal ceiling surfaces are selected for clean appearance, serviceability, and long-term interior performance." icon={<ShieldCheck size={22} />} />
        </div>
      </section>

      <CTASection
        title="Need ceiling solutions for your project?"
        description="Share your interior drawings and ceiling preference. We will help coordinate a practical ceiling package."
        actions={<Button href="/contact">Get Free Quote</Button>}
      />
    </>
  );
}
