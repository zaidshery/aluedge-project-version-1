import React from "react";
import Image from "next/image";
import { ShieldCheck, ThermometerSun, Volume2 } from "lucide-react";
import Button from "../../../components/Button";
import ContentCard from "../../../components/ContentCard";
import CTASection from "../../../components/CTASection";
import PageHero from "../../../components/PageHero";
import SectionHeader from "../../../components/SectionHeader";

const systems = [
  {
    title: "uPVC Sliding Windows",
    description: "Smooth sliding systems with tight sealing, low maintenance, and comfortable daily operation for bedrooms and living spaces.",
    tags: ["Low maintenance", "Smooth movement"],
  },
  {
    title: "uPVC Casement Windows",
    description: "High-seal casement windows for better sound reduction, weather protection, and improved indoor comfort.",
    tags: ["Acoustic comfort", "Weather resistant"],
  },
  {
    title: "uPVC Doors",
    description: "Balcony, patio, and utility door systems with insulated profiles and durable locking hardware.",
    tags: ["Thermal insulation", "Secure locking"],
  },
];

export const metadata = {
  title: "uPVC Windows & Doors | AluEdge",
  description: "Soundproof, thermal-efficient uPVC windows and doors for residential and commercial projects by AluEdge.",
};

export default function UpvcWindowsDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product category"
        title="uPVC Windows & Doors"
        description="Comfort-focused uPVC systems designed for sound reduction, thermal insulation, weather sealing, and easy maintenance."
        actions={<Button href="/contact">Request uPVC Quote</Button>}
        media={(
          <Image
            alt="AluEdge uPVC windows and doors"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
            src="/images/optimized/aluedge-solution-windows-820.webp"
          />
        )}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="uPVC systems"
          title="Quiet, Efficient, Low-Maintenance Openings"
          description="uPVC profiles are ideal for homes and apartments that need better comfort, lower maintenance, and reliable sealing."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <ContentCard key={system.title} title={system.title} description={system.description} icon={<ShieldCheck size={22} />} tags={system.tags} />
          ))}
        </div>
      </section>

      <section className="visual-section visual-section--paper">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard title="Acoustic Comfort" description="Multi-chamber profiles, gaskets, and glass selection help reduce outside noise." icon={<Volume2 size={22} />} />
          <ContentCard title="Thermal Performance" description="Insulated frames and suitable glazing help improve indoor comfort in hot and humid conditions." icon={<ThermometerSun size={22} />} />
        </div>
      </section>

      <CTASection
        title="Need uPVC windows or doors?"
        description="Share your room type, opening sizes, and sound or heat concerns. We will recommend the right uPVC system."
        actions={<Button href="/contact">Get Free Quote</Button>}
      />
    </>
  );
}
