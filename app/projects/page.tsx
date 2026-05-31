"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle } from "lucide-react";
import Button from "../../components/Button";
import ContentCard from "../../components/ContentCard";
import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";

type Project = {
  title: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Infrastructure";
  location: string;
  system: string;
  text: string;
  image: string;
  // Custom technical details for overlay modal
  specifications: {
    profiles: string;
    glass: string;
    windLoad: string;
    acousticRating: string;
    uValue: string;
  };
  highlights: string[];
};

const projectData: Project[] = [
  {
    title: "Surat Diamond Bourse",
    category: "Commercial",
    location: "Surat, Gujarat",
    system: "Stone Dry Cladding",
    text: "Heavy-duty exterior stone dry cladding execution engineered for the world's largest office complex, built for long-term safety and visual depth.",
    image: "/images/optimized/aluedge-solution-cladding-820.webp",
    specifications: {
      profiles: "Heavy Duty Stone Anchoring System",
      glass: "N/A",
      windLoad: "Up to 3.5 kPa (Class 4)",
      acousticRating: "N/A",
      uValue: "N/A",
    },
    highlights: [
      "Rigid stainless steel understructure anchors",
      "Strict deflection checks on heavy stone panels",
      "Finished perfectly to micro tolerances"
    ]
  },
  {
    title: "Gwalior Airport",
    category: "Infrastructure",
    location: "Gwalior, Madhya Pradesh",
    system: "Glazing, Metal Ceilings, ACP & HPL",
    text: "Complete structural glazing, metal false ceilings, ACP, and organic HPL cladding installations for the modern terminal building.",
    image: "/images/optimized/aluedge-project-infrastructure-820.webp",
    specifications: {
      profiles: "AluEdge Span SF-100 Framing",
      glass: "12mm Low-E High-Performance DGU Glass",
      windLoad: "Up to 4.0 kPa (Extreme Class 5)",
      acousticRating: "40 dB terminal acoustic control",
      uValue: "1.4 W/m²K",
    },
    highlights: [
      "Specialized linear metal ceilings",
      "Seamless ACP & HPL dry integration",
      "High deflection tolerance structural support"
    ]
  },
  {
    title: "Prayagraj Airport",
    category: "Infrastructure",
    location: "Prayagraj, Uttar Pradesh",
    system: "Full ACP Cladding & Installation",
    text: "Complete external envelope execution utilizing weather-resistant and non-combustible A2-grade Aluminium Composite Panels.",
    image: "/images/optimized/aluedge-hero-campus-1600.webp",
    specifications: {
      profiles: "AluEdge Premium ACP Grid Framing",
      glass: "N/A",
      windLoad: "Up to 3.0 kPa (Class 3)",
      acousticRating: "N/A",
      uValue: "N/A",
    },
    highlights: [
      "A2 Fire-Rated compound safety",
      "Clean thermal break insulation backing",
      "Strict schedule adherence for airport opening"
    ]
  },
  {
    title: "Indore Metro",
    category: "Infrastructure",
    location: "Indore, Madhya Pradesh",
    system: "ACP & Aluminium Screens",
    text: "High-finish Aluminium Screen facades and exterior ACP cladding panels engineered for structural airflow and transit longevity.",
    image: "/images/optimized/aluedge-solution-facade-820.webp",
    specifications: {
      profiles: "AluEdge Custom Screen Louver Grid",
      glass: "N/A",
      windLoad: "Up to 3.2 kPa (Class 4)",
      acousticRating: "N/A",
      uValue: "N/A",
    },
    highlights: [
      "Highly functional airflow screen details",
      "Extreme durability for public transit traffic",
      "Excellent powder coating color stability"
    ]
  },
  {
    title: "Pune Metro Station",
    category: "Infrastructure",
    location: "Pune, Maharashtra",
    system: "Ceilings, Glazing & Screens",
    text: "Comprehensive metal ceiling solutions, structural glazing facades, and architectural aluminium screen components.",
    image: "/images/optimized/aluedge-solution-ceiling-820.webp",
    specifications: {
      profiles: "AluEdge Station Framing CW-60",
      glass: "10mm Toughened Double-pane Glazing",
      windLoad: "Up to 3.5 kPa (Class 4)",
      acousticRating: "38 dB perimeter damping",
      uValue: "1.5 W/m²K",
    },
    highlights: [
      "Heavy transit grade metal linear ceilings",
      "High wind-load structural deflection",
      "Integrated airflow control screen grilles"
    ]
  },
  {
    title: "Symbiosis University",
    category: "Commercial",
    location: "Indore, Madhya Pradesh",
    system: "Windows, Glazing & Cladding",
    text: "Architectural aluminium window lines, stainless steel railings, spider glazed lobbies, structural glazing, and ACP cladding envelope.",
    image: "/images/optimized/aluedge-project-residence-820.webp",
    specifications: {
      profiles: "AluEdge High-Load Slimline Casement",
      glass: "8mm + 12mm Gap + 8mm Double Glazing",
      windLoad: "Up to 2.8 kPa (Class 3)",
      acousticRating: "35 dB class room damping",
      uValue: "1.6 W/m²K",
    },
    highlights: [
      "Elegant double height spider facade lobby",
      "Premium stainless steel custom safety railings",
      "Thermally-insulated high-span aluminium windows"
    ]
  },
  {
    title: "Tata Consultancy Services (TCS)",
    category: "Commercial",
    location: "Indore, Madhya Pradesh",
    system: "MS Fabrication & Glass Railings",
    text: "Structural steel fabrication, premium soundproof glass partitions, and minimalist glass railings for modern workspace.",
    image: "/images/optimized/aluedge-project-office-820.webp",
    specifications: {
      profiles: "AluEdge Slimline Office Partitions",
      glass: "12mm Toughened Laminated Acoustic Glass",
      windLoad: "N/A (Interior)",
      acousticRating: "42 dB soundproofing blocks",
      uValue: "N/A",
    },
    highlights: [
      "Rigid MS support fabrication understructures",
      "Exceptional interior office acoustic ratings",
      "Frameless glass partitions and balustrades"
    ]
  },
  {
    title: "Phoenix Commercial",
    category: "Commercial",
    location: "Hyderabad, Telangana",
    system: "Glazing Facade & ACP Work",
    text: "Engineered semi-unitized glazing facades and high-finish aluminium composite panel cladding for commercial towers.",
    image: "/images/optimized/aluedge-solution-cladding-820.webp",
    specifications: {
      profiles: "AluEdge CW-60 Glazing Series",
      glass: "8mm High Performance Low-E DGU Glass",
      windLoad: "Up to 3.2 kPa (Class 4)",
      acousticRating: "38 dB sound barrier",
      uValue: "1.4 W/m²K",
    },
    highlights: [
      "Clean vertical joint ACP finishes",
      "Seismic movement isolation fittings",
      "Double weather sealant weatherproofing"
    ]
  },
  {
    title: "LE PARC Hotel",
    category: "Hospitality",
    location: "Bareilly, Uttar Pradesh",
    system: "Glazing, ACP, Doors & Windows",
    text: "Premium hotel facade integration containing structural glazing, ACP, robust entryway doors, windows, and glass railings.",
    image: "/images/optimized/aluedge-project-hotel-820.webp",
    specifications: {
      profiles: "AluEdge T80 Slimline Systems",
      glass: "6mm + 12mm Gap + 6mm Laminated DGU",
      windLoad: "Up to 2.5 kPa (Class 3)",
      acousticRating: "40 dB traffic sound isolation",
      uValue: "1.5 W/m²K",
    },
    highlights: [
      "Guest comfort with extreme soundproofing",
      "Polished balcony glass railings",
      "Heavy duty entry doors tested to high traffic"
    ]
  },
  {
    title: "TDP Party Office",
    category: "Commercial",
    location: "Vijayawada, Andhra Pradesh",
    system: "Cladding & uPVC Systems",
    text: "Tiles dry cladding, structural wet cladding, and high-performance soundproof uPVC doors and windows.",
    image: "/images/optimized/aluedge-solution-windows-820.webp",
    specifications: {
      profiles: "AluEdge Premium uPVC Series",
      glass: "6mm + 12mm Gap + 6mm Toughened Clear",
      windLoad: "Up to 3.0 kPa (Coastal Class 3+)",
      acousticRating: "36 dB sound damping",
      uValue: "1.7 W/m²K",
    },
    highlights: [
      "Rigid dry tile hanging structural brackets",
      "Lead-free high-impact resistant uPVC doors",
      "Coastal weather-stripped protection"
    ]
  },
  {
    title: "Maruti Suzuki Arena",
    category: "Commercial",
    location: "Ujjain, Madhya Pradesh",
    system: "Spider Facade & Sensor Doors",
    text: "Premium glass showroom entryway utilizing spider glazing, ACP cladding panels, and automatic sensor sliding doors.",
    image: "/images/optimized/aluedge-hero-campus-1600.webp",
    specifications: {
      profiles: "AluEdge Heavy Duty Spider Fittings",
      glass: "12mm Toughened Extra Clear Laminated",
      windLoad: "Up to 2.5 kPa (Class 3)",
      acousticRating: "32 dB sound absorption",
      uValue: "1.8 W/m²K",
    },
    highlights: [
      "High visibility extra-clear glass showroom panels",
      "Seamlessly integrated automatic sensor doors",
      "Stainless steel 316 structural spiders"
    ]
  },
  {
    title: "iNSPIRE (Apple Premium Reseller)",
    category: "Commercial",
    location: "Indore, Madhya Pradesh",
    system: "Premium Glazing Facade",
    text: "High-end frameless structural glazing facade for premium retail storefront on M.G. Road.",
    image: "/images/optimized/aluedge-project-office-820.webp",
    specifications: {
      profiles: "AluEdge Frameless Glass SF-100",
      glass: "15mm Toughened Laminated Monolithic Glass",
      windLoad: "Up to 2.5 kPa (Class 3)",
      acousticRating: "35 dB acoustic dampening",
      uValue: "1.9 W/m²K",
    },
    highlights: [
      "Ultra-wide crystal clear vision glass panels",
      "Heavy duty glass fins for structural wind resistance",
      "Premium hardware finishes"
    ]
  },
  {
    title: "Narcotics Wing M.P. Police",
    category: "Infrastructure",
    location: "Indore, Madhya Pradesh",
    system: "High-Security Glazing Work",
    text: "Specialized high-impact security glazing installations and reinforced structural frame systems.",
    image: "/images/optimized/aluedge-project-infrastructure-820.webp",
    specifications: {
      profiles: "AluEdge Reinforced SF-100",
      glass: "12mm + 12mm Multi-layer Laminated Security Glass",
      windLoad: "Up to 3.0 kPa (Class 3)",
      acousticRating: "42 dB high security blocks",
      uValue: "1.3 W/m²K",
    },
    highlights: [
      "Reinforced heavy steel core insertions",
      "Extreme impact-resistant glazing layers",
      "Strict government department security rating"
    ]
  },
  {
    title: "Veda Homes",
    category: "Residential",
    location: "Indore, Madhya Pradesh",
    system: "Premium uPVC Windows",
    text: "Residential villa development outfitted with premium thermal and acoustic insulated uPVC windows.",
    image: "/images/optimized/aluedge-project-residence-820.webp",
    specifications: {
      profiles: "AluEdge Premium uPVC Thermal-T70",
      glass: "6mm Low-E + 12mm Argon + 6mm Clear",
      windLoad: "Up to 2.2 kPa (Class 2)",
      acousticRating: "38 dB peaceful acoustic rating",
      uValue: "1.5 W/m²K",
    },
    highlights: [
      "Argon filled gap for enhanced thermal breaks",
      "Zero wind whistle sliding window seals",
      "Durable white lead-free uPVC frames"
    ]
  },
  {
    title: "Silver Spring Phase 2",
    category: "Residential",
    location: "Indore, Madhya Pradesh",
    system: "High-End Aluminium Windows",
    text: "Outfitted premium multi-story residential towers with advanced sliding and casement aluminium windows.",
    image: "/images/optimized/aluedge-solution-windows-820.webp",
    specifications: {
      profiles: "AluEdge T80 Slimline Systems",
      glass: "6mm + 12mm Air + 6mm Toughened Clear",
      windLoad: "Up to 2.8 kPa (Class 3)",
      acousticRating: "36 dB sound dampening",
      uValue: "1.6 W/m²K",
    },
    highlights: [
      "Multi-point safety locking mechanisms",
      "Elegant powder coated color uniformity",
      "Very smooth roller track slider guides"
    ]
  },
  {
    title: "Ashok Raj Resorts and Farms",
    category: "Hospitality",
    location: "Indore, Madhya Pradesh",
    system: "Architectural Aluminium Windows",
    text: "Custom high-span architectural aluminium windows combining grand villa size openings with extreme weather sealing.",
    image: "/images/optimized/aluedge-project-hotel-820.webp",
    specifications: {
      profiles: "AluEdge Custom Grand-Span T90",
      glass: "8mm Toughened + 16mm Argon + 8mm Low-E",
      windLoad: "Up to 2.8 kPa (Class 3)",
      acousticRating: "38 dB sound sealing rating",
      uValue: "1.4 W/m²K",
    },
    highlights: [
      "Vibrant bronze powder-coated matches landscape",
      "Exceptional double thermal broken profiles",
      "Heavy duty stainless steel friction stays"
    ]
  },
  {
    title: "NTPC (Prayagraj, Khurja, Uchahar)",
    category: "Infrastructure",
    location: "Multiple Sites",
    system: "ACP, Aluminium & uPVC Systems",
    text: "Heavy-duty industrial site execution including ACP installations, structural aluminium doors and windows, and robust uPVC openings.",
    image: "/images/optimized/aluedge-solution-cladding-820.webp",
    specifications: {
      profiles: "AluEdge Industrial Grade Frame SF-100",
      glass: "6mm + 12mm Gap + 6mm Toughened Reflective",
      windLoad: "Up to 3.5 kPa (Class 4)",
      acousticRating: "35 dB sound blocks",
      uValue: "1.6 W/m²K",
    },
    highlights: [
      "Extremely robust industrial grade fittings",
      "Thermal insulation checks for high heat zones",
      "Coordinated execution across multiple state plants"
    ]
  }
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = ["All", "Residential", "Commercial", "Hospitality", "Infrastructure"];

  const filteredProjects = selectedFilter === "All"
    ? projectData
    : projectData.filter(p => p.category === selectedFilter);

  return (
    <>
      <PageHero
        eyebrow="AluEdge Portfolio"
        title="Our Architectural Landmarks"
        description="Explore a curated selection of residential envelopes, high-performance office facades, and institutional glaze packages delivered across India."
        actions={<Button href="/contact">Start Similar Project</Button>}
      />

      <section className="container visual-section">
        <SectionHeader
          eyebrow="Delivered work"
          title="Project references with technical depth"
          description="Filter by segment, then open any project to review its system, location, performance notes, and execution highlights."
          align="center"
        />
        
        <div className="projects-segment-bar" aria-label="Filter projects by segment">
          {filterOptions.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedFilter(cat)}
                className={`projects-segment-button${isSelected ? " projects-segment-button--active" : ""}`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <ContentCard
              key={idx} 
              eyebrow={project.category}
              title={project.title}
              description={project.text}
              image={project.image}
              imageAlt={project.title}
              meta={[
                { label: "System", value: project.system },
                { label: "Location", value: project.location },
              ]}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Tech Specifications Overlay Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 bg-[#071526]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="bg-white border border-line rounded-2xl w-full max-w-2xl shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 bg-white/90 backdrop-blur-md border border-line hover:bg-white text-ink w-9 h-9 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all shadow-sm hover:scale-105"
              type="button"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Scrollable container for modal contents */}
            <div className="overflow-y-auto flex-1">
              
              {/* Modal Image Header */}
              <div className="h-56 sm:h-64 relative bg-surface-strong">
                <Image 
                  alt={activeProject.title}
                  fill
                  sizes="680px"
                  src={activeProject.image}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-bronze text-white border-none rounded-full px-3 py-0.5 text-[9px] font-black uppercase tracking-widest inline-block mb-2">
                    {activeProject.category}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-white font-semibold tracking-tight">
                    {activeProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-[11px] font-black tracking-widest text-green uppercase mb-2">Project Brief</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {activeProject.text}
                  </p>
                </div>

                {/* Technical Specifications Grid */}
                <div>
                  <h3 className="text-[11px] font-black tracking-widest text-green uppercase mb-3">Technical Parameters</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 bg-surface">
                      <span className="text-[9px] block text-muted font-black tracking-wider uppercase mb-1">Profile System</span>
                      <strong className="text-xs sm:text-sm text-ink font-extrabold">{activeProject.specifications.profiles}</strong>
                    </div>
                    <div className="p-4 bg-surface">
                      <span className="text-[9px] block text-muted font-black tracking-wider uppercase mb-1">Glass Configuration</span>
                      <strong className="text-xs sm:text-sm text-ink font-extrabold">{activeProject.specifications.glass}</strong>
                    </div>
                    <div className="p-4 bg-surface">
                      <span className="text-[9px] block text-muted font-black tracking-wider uppercase mb-1">Wind Speed Threshold</span>
                      <strong className="text-xs sm:text-sm text-ink font-extrabold">{activeProject.specifications.windLoad}</strong>
                    </div>
                    <div className="p-4 bg-surface">
                      <span className="text-[9px] block text-muted font-black tracking-wider uppercase mb-1">Acoustic Damping</span>
                      <strong className="text-xs sm:text-sm text-ink font-extrabold">{activeProject.specifications.acousticRating}</strong>
                    </div>
                    <div className="p-4 bg-surface sm:col-span-2">
                      <span className="text-[9px] block text-muted font-black tracking-wider uppercase mb-1">Thermal Transmittance (U-Value)</span>
                      <strong className="text-xs sm:text-sm text-green font-extrabold">{activeProject.specifications.uValue}</strong>
                    </div>
                  </div>
                </div>

                {/* Execution highlights */}
                <div>
                  <h3 className="text-[11px] font-black tracking-widest text-green uppercase mb-3">Installation Highlights</h3>
                  <ul className="p-0 m-0 list-none space-y-2.5">
                    {activeProject.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-ink">
                        <CheckCircle size={16} className="text-green flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer specs */}
                <div className="border-t border-line pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <span className="text-xs text-muted">
                    Location: <strong className="font-extrabold text-ink">{activeProject.location}</strong>
                  </span>
                  <div className="w-full sm:w-auto">
                    <Button href="/contact">Consult Similar Project</Button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
