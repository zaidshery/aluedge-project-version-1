import React from "react";
import { Home, Building2, Layers, Wrench, Palette, ShieldCheck, Cpu } from "lucide-react";
import Button from "../../components/Button";
import ContentCard from "../../components/ContentCard";
import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";

const productFamilies = [
  {
    title: "Façade Solutions",
    desc: "Seamless, high-visibility structural glass exteriors and curtain walls engineered to satisfy modern high-rise load demands and design criteria.",
    Icon: Building2,
    image: "/images/optimized/aluedge-solution-facade-820.webp",
    features: [
      "Curtain Wall Systems (Semi-Unitized & Unitized)",
      "Structural Glazing (Seamless Glass)",
      "Spider Glazing & Frameless Glass Minimalist Systems",
    ],
    href: "/products/facade-solution",
    tag: "Façades",
  },
  {
    title: "Aluminium Windows & Doors",
    desc: "Premium aluminium sliding, casement, folding, and lift-slide systems with slim sightlines, robust hardware, and architectural finishes.",
    Icon: Home,
    image: "/images/optimized/aluedge-project-residence-820.webp",
    features: [
      "Slimline Sliding Systems",
      "Casement & Fixed Windows",
      "Sliding-Folding Doors",
      "Premium Powder-Coated Finishes",
    ],
    href: "/products/aluminium-windows-doors",
    tag: "Aluminium",
  },
  {
    title: "uPVC Windows & Doors",
    desc: "Soundproof, thermal-efficient uPVC openings designed for residential comfort, low maintenance, weather sealing, and long service life.",
    Icon: Home,
    image: "/images/optimized/aluedge-solution-windows-820.webp",
    features: [
      "Soundproof Sealing",
      "Thermal Insulation",
      "Sliding & Casement Windows",
      "Low-Maintenance Profiles",
    ],
    href: "/products/upvc-windows-doors",
    tag: "uPVC",
  },
  {
    title: "Cladding Solutions",
    desc: "High-finish exterior cladding systems engineered for extreme weather exposure and architectural organic depth.",
    Icon: Layers,
    image: "/images/optimized/aluedge-solution-cladding-820.webp",
    features: [
      "Aluminium Composite Panel Cladding (ACP)",
      "High-Pressure Laminate Cladding (HPL)",
      "Dry & Wet Stone/Tile Structural Cladding Solutions",
    ],
    href: "/products/cladding-solutions",
    tag: "Envelopes",
  },
  {
    title: "Ceiling Solutions",
    desc: "Premium metal ceilings, grid ceilings, and linear ceiling systems built to elevate interior aesthetics, airflow control, acoustics, and safety.",
    Icon: Wrench,
    image: "/images/optimized/aluedge-solution-ceiling-820.webp",
    features: [
      "Metal & Grid False Ceilings",
      "Linear Aluminium Ceilings",
      "Clip-in Metal Tile Ceilings",
    ],
    href: "/products/ceiling-solutions",
    tag: "Ceilings",
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
                <Button href={item.href}>View Category</Button>
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
