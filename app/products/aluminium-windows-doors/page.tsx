import React from "react";
import Image from "next/image";
import { Home, Palette, ShieldCheck } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const systems = [
  {
    title: "Slimline Sliding Systems",
    description: "Large-format aluminium sliding doors and windows with clean sightlines, smooth rollers, and durable track systems.",
    tags: ["Balconies", "Living areas"],
  },
  {
    title: "Casement & Fixed Windows",
    description: "Strong aluminium frames for daily-use openings, fixed glass panels, ventilation windows, and premium residential facades.",
    tags: ["Weather sealing", "Modern profiles"],
  },
  {
    title: "Sliding-Folding Doors",
    description: "Wide opening systems for patios, showrooms, terraces, and flexible indoor-outdoor transitions.",
    tags: ["Wide spans", "Premium hardware"],
  },
];

export const metadata = {
  title: "Aluminium Windows & Doors | AluEdge",
  description: "Premium aluminium sliding, casement, fixed, and folding window and door systems by AluEdge.",
};

export default function AluminiumWindowsDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product category"
        title="Aluminium Windows & Doors"
        description="Premium aluminium openings built for slim aesthetics, structural strength, smooth movement, weather sealing, and long-lasting finish quality."
        actions={<Button href="/contact">Request Aluminium Quote</Button>}
        media={(
          <Image
            alt="AluEdge aluminium windows and doors"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-project-residence-820.webp"
          />
        )}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="Aluminium systems"
          title="Strong Frames with Refined Sightlines"
          description="Choose from sliding, casement, fixed, and folding configurations based on room use, opening size, wind exposure, and finish preference."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <ContentCard key={system.title} title={system.title} description={system.description} icon={<Home size={22} />} tags={system.tags} />
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="Premium Finish Options" description="Powder-coated, anodized, and project-specific finish selections can be coordinated with your elevation palette." icon={<Palette size={22} />} />
          <ContentCard title="Reliable Hardware" description="Rollers, locks, handles, hinges, and seals are selected for smooth daily use and long-term durability." icon={<ShieldCheck size={22} />} />
        </div>
      </section>

      <CTASection
        title="Need aluminium windows or doors?"
        description="Tell us your opening sizes, finish preference, and project location. We will help you select the right system."
        actions={<Button href="/contact">Get Free Quote</Button>}
      />
    </>
  );
}
