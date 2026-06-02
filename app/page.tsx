"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Home,
  Layers,
  Leaf,
  Shield,
  ShieldCheck,
  Sun,
  Users,
  Volume2,
  Wrench,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Button from "../components/Button";
import { businessDetails } from "../components/businessDetails";

type IconCard = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

type SolutionCard = IconCard & {
  image: string;
  features: string[];
  href: string;
};

type StatCard = {
  value: string;
  label: string;
  Icon: LucideIcon;
};

type ProjectCard = {
  title: string;
  type: string;
  location: string;
  system: string;
  text: string;
  image: string;
};

type IndustrySegment = {
  title: string;
  text: string;
  image: string;
  systems: string[];
};

const featureStrip: IconCard[] = [
  { title: "Precision Engineered", text: "For Perfect Fit", Icon: Award },
  { title: "Thermal Performance", text: "Energy Efficient", Icon: Sun },
  { title: "Acoustic Comfort", text: "Peaceful Interiors", Icon: Volume2 },
  { title: "Weather Resistant", text: "Built to Last", Icon: Shield },
  { title: "Sustainable Choice", text: "Better for Tomorrow", Icon: Leaf },
];

const solutions: SolutionCard[] = [
  {
    title: "Façade Solutions",
    text: "Engineered high-performance curtain walls, structural glazing, and architectural building envelopes designed for modern high-rises.",
    Icon: Building2,
    image: "/images/optimized/aluedge-solution-facade-820.webp",
    features: ["Curtain Walls", "High-Rise Envelopes"],
    href: "/products",
  },
  {
    title: "uPVC Doors & Windows",
    text: "Advanced soundproof, thermal-insulated, and highly energy-efficient designs that deliver perfect quiet and comfort.",
    Icon: Home,
    image: "/images/optimized/aluedge-solution-windows-820.webp",
    features: ["Soundproof Seal", "Energy Efficient"],
    href: "/products",
  },
  {
    title: "Aluminium Doors & Windows",
    text: "Premium sliding systems, casements, and sliding-folding doors built with structural elegance and high-grade finishes.",
    Icon: Home,
    image: "/images/optimized/aluedge-project-residence-820.webp",
    features: ["Sliding & Folding", "Premium Finish"],
    href: "/products",
  },
  {
    title: "ACP & HPL Cladding",
    text: "Lightweight, weather-resistant Aluminium Composite Panel and High-Pressure Laminate cladding systems.",
    Icon: Layers,
    image: "/images/optimized/aluedge-solution-cladding-820.webp",
    features: ["ACP Cladding", "HPL Panels"],
    href: "/products",
  },
  {
    title: "Structural Glazing",
    text: "Seamless glass exteriors combining minimalist aesthetic sightlines with engineering precision and wind-load resistance.",
    Icon: Building2,
    image: "/images/optimized/aluedge-project-office-820.webp",
    features: ["Seamless Sightlines", "Wind-Load Deflection"],
    href: "/products",
  },
  {
    title: "Ceiling Systems",
    text: "High-finish metal linear ceilings, grid tile ceilings, and custom-engineered architectural false ceiling profiles.",
    Icon: Layers,
    image: "/images/optimized/aluedge-solution-ceiling-820.webp",
    features: ["Metal Ceilings", "Grid & False Ceilings"],
    href: "/products",
  },
  {
    title: "Glass Railings & Partitions",
    text: "Premium balcony glass balustrades, staircase glass, office partitions, and heavy-duty frame-free entries.",
    Icon: Wrench,
    image: "/images/optimized/aluedge-solution-railing-820.webp",
    features: ["Glass Railings", "Office Partitions"],
    href: "/products",
  },
];

const projects: ProjectCard[] = [
  {
    title: "Luxury Residential Facade",
    type: "Residential",
    location: "Hyderabad, Telangana",
    system: "Windows / Railing / Glazing",
    text: "A refined residential envelope with large-format openings, clean sightlines, and durable exterior detailing.",
    image: "/images/optimized/aluedge-project-residence-820.webp",
  },
  {
    title: "Commercial Glazing System",
    type: "Commercial",
    location: "Bengaluru, Karnataka",
    system: "Facade / Office Partitions",
    text: "Performance glazing and partition systems planned for daily workplace use, acoustic comfort, and a crisp corporate finish.",
    image: "/images/optimized/aluedge-project-office-820.webp",
  },
  {
    title: "Hospitality Entrance Solution",
    type: "Hospitality",
    location: "Mumbai, Maharashtra",
    system: "Doors / Canopy / Cladding",
    text: "A polished guest-facing entrance package combining cladding, glazing, and precise aluminium detailing.",
    image: "/images/optimized/aluedge-project-hotel-820.webp",
  },
  {
    title: "Infrastructure Facade Package",
    type: "Infrastructure",
    location: "New Delhi, India",
    system: "Facade / Cladding / Glazing",
    text: "Durable architectural systems organized for large public environments and demanding site execution.",
    image: "/images/optimized/aluedge-project-infrastructure-820.webp",
  },
];

const stats: StatCard[] = [
  { value: businessDetails.projectsDelivered, label: "Projects Delivered", Icon: Building2 },
  { value: businessDetails.serviceArea, label: "Execution Support", Icon: Globe2 },
  { value: "Resi + Comm", label: "Project Experience", Icon: Users },
  { value: "Facade + Fenestration", label: "System Expertise", Icon: ShieldCheck },
];

const reasons: IconCard[] = [
  {
    title: "Quality Workmanship",
    text: "We use high-grade, premium materials and advanced technology to deliver superior finishing and long-lasting durability.",
    Icon: Award,
  },
  {
    title: "Modern Design Approach",
    text: "Simple, elegant, functional, and future-ready customized solutions tailored to match your project's unique needs.",
    Icon: Palette,
  },
  {
    title: "Timely Project Delivery",
    text: "Strict adherence to schedules ensures your project finishes on time, every time.",
    Icon: CalendarDays,
  },
  {
    title: "Experienced & Trained Team",
    text: "Highly skilled professionals providing expert engineering, precise fabrication, and meticulous installation.",
    Icon: Users,
  },
  {
    title: "Transparent Pricing",
    text: "Clear, honest, and competitive cost estimates with absolutely no hidden fees.",
    Icon: ShieldCheck,
  },
];

const industries: IndustrySegment[] = [
  {
    title: "Residential",
    text: "Elegant openings, railing, and glazing systems for villas, apartments, and premium homes.",
    image: "/images/optimized/aluedge-industry-residential-1200.webp",
    systems: ["Windows", "Doors", "Railing"],
  },
  {
    title: "Commercial",
    text: "Facade, office partition, and glazing packages for modern workplace environments.",
    image: "/images/optimized/aluedge-industry-commercial-1200.webp",
    systems: ["Facades", "Partitions", "Glazing"],
  },
  {
    title: "Hospitality",
    text: "Guest-facing entrances, canopies, ceilings, and cladding with refined finish quality.",
    image: "/images/optimized/aluedge-industry-hospitality-1200.webp",
    systems: ["Entrances", "Cladding", "Ceilings"],
  },
  {
    title: "Infrastructure",
    text: "Durable facade, glazing, and cladding systems for high-use institutional and public projects.",
    image: "/images/optimized/aluedge-industry-infrastructure-1200.webp",
    systems: ["Facade", "Cladding", "Execution"],
  },
];

const trustedLogos = [
  "Architects",
  "Builders",
  "Developers",
  "Interior Teams",
  "Contractors",
  "Project Consultants",
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isPausedRef = useRef(false);

  const updateScrollState = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);

      const card = container.querySelector(".solution-card");
      if (card) {
        const cardWidth = card.clientWidth;
        const cards = container.querySelectorAll(".solution-card");
        let gap = 24;
        if (cards.length > 1) {
          gap = (cards[1] as HTMLElement).offsetLeft - ((cards[0] as HTMLElement).offsetLeft + cardWidth);
        }
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.max(0, Math.min(solutions.length - 1, index)));
      }
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollState, { passive: true });
      updateScrollState();
      window.addEventListener("resize", updateScrollState);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollState);
      }
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPausedRef.current) return;
      if (document.hidden) return;

      const container = scrollRef.current;
      if (container) {
        const card = container.querySelector(".solution-card");
        if (card) {
          const cardWidth = card.clientWidth;
          const cards = container.querySelectorAll(".solution-card");
          let gap = 24;
          if (cards.length > 1) {
            gap = (cards[1] as HTMLElement).offsetLeft - ((cards[0] as HTMLElement).offsetLeft + cardWidth);
          }

          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScrollLeft - 5) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
          }
        }
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector(".solution-card");
      if (card) {
        const cardWidth = card.clientWidth;
        const cards = container.querySelectorAll(".solution-card");
        let gap = 24;
        if (cards.length > 1) {
          gap = (cards[1] as HTMLElement).offsetLeft - ((cards[0] as HTMLElement).offsetLeft + cardWidth);
        }
        const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector(".solution-card");
      if (card) {
        const cardWidth = card.clientWidth;
        const cards = container.querySelectorAll(".solution-card");
        let gap = 24;
        if (cards.length > 1) {
          gap = (cards[1] as HTMLElement).offsetLeft - ((cards[0] as HTMLElement).offsetLeft + cardWidth);
        }
        container.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
      }
    }
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Precision | Elegance | Innovation</p>
            <h1>
              <span className="hero__title-desktop">
                <span className="hero__title-main">Transforming Spaces</span>
                <span>with Strength &amp;</span>
                <span className="hero__title-accent">Style</span>
              </span>
              <span className="hero__title-mobile">
                Transforming Spaces <span>with Strength &amp; <span className="hero__title-accent">Style</span></span>
              </span>
            </h1>
            <p className="hero__lead hero__lead-desktop">
              Established in 2009, ALUEDGE is a trusted world-class brand delivering innovative, high-quality architectural Façade systems, premium aluminium, and uPVC windows and doors.
            </p>
            <p className="hero__lead hero__lead-mobile">
              Established in 2009, ALUEDGE is a trusted world-class brand delivering innovative, high-quality architectural Façade systems, premium aluminium, and uPVC windows and doors.
            </p>
            <div className="hero__actions">
              <Button href="#solutions">Explore Our Solutions</Button>
              <Button href="/contact" variant="outline">Contact Our Experts</Button>
            </div>
            <Link className="hero__contact-link" href="/contact">
              For project enquiries, connect with our team <ArrowRight size={15} />
            </Link>
          </div>
          <div className="hero__media">
             <Image
              alt="Premium architectural facade with large glass fenestration by AluEdge"
              className="hero__poster hero__poster--desktop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 820px"
              src="/images/aluedge-hero-desktop.jpg"
            />
            <Image
              alt="Premium architectural facade vertical crop for mobile"
              className="hero__poster hero__poster--mobile"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 820px"
              src="/images/aluedge-hero-mobile.jpg"
            />
            <div className="hero__floating-card">
              <span>{businessDetails.serviceArea} Project Execution</span>
              <strong>Windows / Facades / Glazing / Cladding</strong>
            </div>
          </div>
          <div className="hero__trust" aria-label="Project delivery strengths">
            <span>
              <CalendarDays size={24} strokeWidth={1.6} />
              <strong>{businessDetails.establishedYear}</strong>
              <small>Established</small>
            </span>
            <span>
              <Building2 size={24} strokeWidth={1.6} />
              <strong>{businessDetails.projectsDelivered}</strong>
              <small>Projects</small>
            </span>
            <span>
              <Award size={24} strokeWidth={1.6} />
              <strong>Premium</strong>
              <small>Materials</small>
            </span>
          </div>
        </div>
      </section>

      <section className="feature-strip container" aria-label="Product strengths">
        <div className="feature-strip__track">
          {featureStrip.map(({ title, text, Icon }) => (
            <article className="feature-strip__item" key={title}>
              <Icon size={34} strokeWidth={1.8} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
          {featureStrip.map(({ title, text, Icon }) => (
            <article aria-hidden="true" className="feature-strip__item feature-strip__item--dup" key={`${title}-dup`}>
              <Icon size={34} strokeWidth={1.8} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions container" id="solutions">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Complete fenestration solutions</p>
          <h2>End-to-End Systems for Modern Building Envelopes</h2>
          <p className="section-heading__text">
            From precision windows and doors to facade, glazing, cladding, ceiling, railing,
            and partition systems, AluEdge coordinates architectural packages with a clear
            performance-first approach.
          </p>
        </div>
        <div 
          className="solutions__carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <button 
            className="carousel-button carousel-button--left" 
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            type="button"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
 
          <div className="solutions__grid" ref={scrollRef}>
            {solutions.map(({ title, text, Icon, image, features, href }) => (
              <article className="solution-card" key={title}>
                <div className="solution-card__image">
                  <Image
                    alt={`${title} architectural system by AluEdge`}
                    height={130}
                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 72px) / 2), (max-width: 1440px) calc((100vw - 128px) / 3), 470px"
                    src={image}
                    width={190}
                  />
                  <span className="solution-card__mark">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="solution-card__content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="solution-card__tags" aria-label={`${title} capabilities`}>
                    {features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                </div>
                <Link className="solution-card__action" href={href} aria-label={`Discuss ${title} with AluEdge`}>
                  Explore solution <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
              </article>
            ))}
          </div>
 
          <button 
            className="carousel-button carousel-button--right" 
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            type="button"
            disabled={!canScrollRight}
          >
            <ChevronRight size={24} />
          </button>

          <div className="carousel-dots" aria-label="Solutions carousel slides">
            {solutions.map((sol, index) => (
              <button
                key={sol.title}
                className={`carousel-dot ${index === activeIndex ? "carousel-dot--active" : ""}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to slide ${index + 1}: ${sol.title}`}
                type="button"
              />
            ))}
          </div>
        </div>
        <div className="solutions__actions">
          <Button href="/contact">Discuss Your Requirement</Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </section>

      <section className="projects container" id="projects">
        <div className="projects__intro">
          <p className="eyebrow">Building landmarks together</p>
          <h2>Projects That Define Performance & Beauty</h2>
          <p>
            A closer look at AluEdge project applications across residential, commercial,
            hospitality, and infrastructure environments.
          </p>
          <Link href="/contact">
            Start Similar Project <ArrowRight size={17} />
          </Link>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__image">
                <Image
                  alt={`${project.title} architectural project in ${project.location}`}
                  height={178}
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 72px) / 2), (max-width: 1440px) calc((100vw - 160px) / 3), 420px"
                  src={project.image}
                  width={280}
                />
                <span className="project-card__pill">{project.type}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__copy">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
                <dl className="project-card__meta">
                  <div>
                    <dt>System</dt>
                    <dd>{project.system}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                </dl>
                <Link href="/contact" aria-label={`Start a project similar to ${project.title}`}>
                  Start similar project <ArrowRight size={15} strokeWidth={2.2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="projects__actions">
          <Button href="/projects" variant="secondary">
            View Project Gallery
          </Button>
          <Button href="/contact">Start Similar Project</Button>
        </div>
      </section>

      <section className="stats container" aria-label="AluEdge delivery promise">
        {stats.map(({ value, label, Icon }) => (
          <article key={label}>
            <Icon size={38} strokeWidth={1.7} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </article>
        ))}
        <aside>
          <div>
            <p className="eyebrow">Quality commitment</p>
            <h2>Planned for performance from consultation to installation.</h2>
            <p>
              Every AluEdge system is considered for finish quality, durability, serviceability,
              and dependable project coordination.
            </p>
          </div>
          <ShieldCheck size={54} strokeWidth={1.5} />
        </aside>
      </section>

      <section className="why container" id="why">
        <div className="why__intro">
          <div className="section-heading">
            <p className="eyebrow">Why choose AluEdge?</p>
            <h2>Engineered for Performance, Built for Trust.</h2>
          </div>
          <p>
            Architects, builders, developers, and homeowners choose AluEdge for system guidance,
            site discipline, and architectural finishes that are made to last.
          </p>
          <Button href="/contact" variant="secondary">
            Talk to an Expert
          </Button>
        </div>
        <div className="why__grid">
          {reasons.map(({ title, text, Icon }) => (
            <article key={title}>
              <span>
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="industries">
        <div className="container industries__inner">
          <div className="industries__intro">
            <p className="eyebrow">Serving diverse industries</p>
            <h2>Designed for Every Type of Space</h2>
            <p>
              From private residences to public infrastructure, each segment gets systems matched
              to usage, climate, finish expectations, and project scale.
            </p>
            <Link href="/products">
              Explore Applications <ArrowRight size={17} />
            </Link>
          </div>
          <div className="industries__grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.title}>
                <Image
                  alt={`${industry.title} fenestration application`}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 72px) / 2), (max-width: 1440px) calc((100vw - 160px) / 4), 330px"
                  src={industry.image}
                />
                <div>
                  <span>Project segment</span>
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                  <ul aria-label={`${industry.title} systems`}>
                    {industry.systems.map((system) => (
                      <li key={system}>{system}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trusted container" id="resources" aria-label="Trusted project teams">
        <p className="eyebrow">Trusted by teams across architecture, construction, and interiors</p>
        <h2>{"Collaborating with India's Leading Professionals."}</h2>
        <div className="trusted__viewport">
          <div className="trusted__track">
            {trustedLogos.map((logo) => (
              <span key={logo} className="trusted__item">
                {logo}
              </span>
            ))}
            {/* Duplicated for infinite slow-motion marquee scrolling on mobile */}
            {trustedLogos.map((logo) => (
              <span key={`${logo}-dup`} className="trusted__item trusted__item--dup" aria-hidden="true">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta container" id="contact">
        <div className="cta__image">
          <Image
            alt="AluEdge building project"
            fill
            sizes="(max-width: 860px) calc(100vw - 32px), (max-width: 1440px) 260px, 300px"
            src="/images/optimized/aluedge-cta-building-1200.webp"
          />
        </div>
        <div className="cta__content">
          <h2>Ready to plan your next facade, window, or glazing project?</h2>
          <p>
            Share your requirement and our team will help you choose the right system, finish,
            and execution approach.
          </p>
          <ul className="cta__bullets">
            <li>
              <CheckCircle2 size={16} strokeWidth={2.1} /> Site consultation
            </li>
            <li>
              <CheckCircle2 size={16} strokeWidth={2.1} /> Custom system selection
            </li>
            <li>
              <CheckCircle2 size={16} strokeWidth={2.1} /> Project-ready execution
            </li>
          </ul>
        </div>
        <div className="cta__actions">
          <Button href="/contact">Get Free Quote</Button>
          <Button href="/products" variant="secondary">
            Explore Solutions
          </Button>
        </div>
      </section>
    </>
  );
}
