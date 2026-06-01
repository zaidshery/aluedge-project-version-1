import React from "react";
import Image from "next/image";
import { Building2, Compass, ShieldCheck } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const systems = [
  {
    title: "Unitized Curtain Wall",
    description: "Factory-fabricated facade panels designed for fast installation, tight weather sealing, and consistent high-rise finish quality.",
    tags: ["High-rise envelopes", "Factory glazed panels"],
  },
  {
    title: "Semi-Unitized Facade",
    description: "Site-assembled mullion and transom systems with shop-prepared glass panels for mid-rise commercial and residential towers.",
    tags: ["Flexible site execution", "Cost-efficient facade grid"],
  },
  {
    title: "Spider & Structural Glazing",
    description: "Minimal glass systems for lobbies, showrooms, canopies, and transparent entrance elevations.",
    tags: ["Frameless visual", "SS 316 fittings"],
  },
];

export const metadata = {
  title: "Façade Solutions | AluEdge",
  description: "Architectural facade, curtain wall, structural glazing, and spider glazing solutions by AluEdge.",
};

export default function FacadeSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Product category"
        title="Façade Solutions"
        description="Architectural glass facade systems engineered for wind load, weather protection, thermal performance, and clean modern building elevations."
        actions={<Button href="/contact">Request Facade Consultation</Button>}
        media={(
          <Image
            alt="AluEdge architectural facade solution"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-facade-820.webp"
          />
        )}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="Facade systems"
          title="Engineered Building Envelopes"
          description="We plan facade packages around structural safety, water drainage, sightlines, finish quality, and installation sequence."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <ContentCard
              key={system.title}
              title={system.title}
              description={system.description}
              icon={<Building2 size={22} />}
              tags={system.tags}
            />
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="Wind Load Review" description="Profile sections, bracket spacing, glass thickness, and anchoring are reviewed for project exposure." icon={<Compass size={22} />} />
          <ContentCard title="Weather Protection" description="Drainage paths, EPDM gaskets, sealants, and pressure equalization help protect the envelope in monsoon conditions." icon={<ShieldCheck size={22} />} />
        </div>
      </section>

      <CTASection
        title="Ready to plan a facade package?"
        description="Share your elevation drawings and project location. Our team will help shortlist the right facade system."
        actions={<Button href="/contact">Get Free Quote</Button>}
      />
    </>
  );
}
