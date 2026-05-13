import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Home,
  Layers,
  Leaf,
  Mail,
  Menu,
  MapPin,
  Palette,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Sun,
  Users,
  Volume2,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IconCard = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

type SolutionCard = IconCard & {
  image: string;
  features: string[];
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

type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    text: string;
  }[];
};

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products & Services",
    href: "#solutions",
    children: [
      { label: "Windows & Doors", href: "#solutions", text: "Premium aluminium and uPVC systems" },
      { label: "Facade & Glazing", href: "#solutions", text: "Architectural glass and facade solutions" },
      { label: "Cladding & Ceilings", href: "#solutions", text: "Durable finishes for modern envelopes" },
      { label: "Railing & Decking", href: "#solutions", text: "Refined safety details for every project" },
    ],
  },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#why" },
  {
    label: "Resources",
    href: "#resources",
    children: [
      { label: "Case Studies", href: "#projects", text: "Installed work across residential and commercial sites" },
      { label: "Material Guidance", href: "#resources", text: "Finish, performance and specification support" },
      { label: "Architect Support", href: "#contact", text: "Consultation for drawings, budgets and timelines" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const featureStrip: IconCard[] = [
  { title: "Precision Engineered", text: "For Perfect Fit", Icon: Award },
  { title: "Thermal Performance", text: "Energy Efficient", Icon: Sun },
  { title: "Acoustic Comfort", text: "Peaceful Interiors", Icon: Volume2 },
  { title: "Weather Resistant", text: "Built to Last", Icon: Shield },
  { title: "Sustainable Choice", text: "Better for Tomorrow", Icon: Leaf },
];

const solutions: SolutionCard[] = [
  {
    title: "Windows & Doors",
    text: "Thermally efficient aluminium and uPVC openings engineered for comfort, security, and long-term performance.",
    Icon: Home,
    image: "/images/industry-residential.jpg",
    features: ["Aluminium / uPVC", "Thermal sealing"],
  },
  {
    title: "Facade & Glazing",
    text: "Curtain wall, structural glazing, and spider glazing systems shaped for high-performing building envelopes.",
    Icon: Building2,
    image: "/images/industry-commercial.jpg",
    features: ["Curtain wall", "Spider glazing"],
  },
  {
    title: "Cladding Solutions",
    text: "ACP, HPL, wet, and dry cladding packages with refined finishes and dependable site coordination.",
    Icon: Layers,
    image: "/images/project-hotel.jpg",
    features: ["ACP / HPL", "Wet & dry systems"],
  },
  {
    title: "Railing & Decking",
    text: "Elegant railing and decking details that balance safety, durability, and architectural intent.",
    Icon: Wrench,
    image: "/images/project-airport.jpg",
    features: ["Balustrades", "Exterior durability"],
  },
  {
    title: "Ceiling Systems",
    text: "Functional ceiling systems for hospitality, commercial, and institutional interiors.",
    Icon: Layers,
    image: "/images/industry-hospitality.jpg",
    features: ["Linear ceilings", "Clean services"],
  },
  {
    title: "Color & Materials",
    text: "Finish guidance for profiles, glass, panels, and textures that align with the project palette.",
    Icon: Palette,
    image: "/images/cta-building.jpg",
    features: ["Finish matching", "Material guidance"],
  },
];

const projects: ProjectCard[] = [
  {
    title: "Luxury Residential Facade",
    type: "Residential",
    location: "Hyderabad, Telangana",
    system: "Windows / Railing / Glazing",
    text: "A refined residential envelope with large-format openings, clean sightlines, and durable exterior detailing.",
    image: "/images/project-residence.jpg",
  },
  {
    title: "Commercial Glazing System",
    type: "Commercial",
    location: "Bengaluru, Karnataka",
    system: "Facade / Office Partitions",
    text: "Performance glazing and partition systems planned for daily workplace use, acoustic comfort, and a crisp corporate finish.",
    image: "/images/project-office.jpg",
  },
  {
    title: "Hospitality Entrance Solution",
    type: "Hospitality",
    location: "Mumbai, Maharashtra",
    system: "Doors / Canopy / Cladding",
    text: "A polished guest-facing entrance package combining cladding, glazing, and precise aluminium detailing.",
    image: "/images/project-hotel.jpg",
  },
  {
    title: "Infrastructure Facade Package",
    type: "Infrastructure",
    location: "New Delhi, India",
    system: "Facade / Cladding / Glazing",
    text: "Durable architectural systems organized for large public environments and demanding site execution.",
    image: "/images/project-airport.jpg",
  },
];

const stats: StatCard[] = [
  { value: "200+", label: "Projects Delivered", Icon: Building2 },
  { value: "Pan-India", label: "Execution Support", Icon: Globe2 },
  { value: "Resi + Comm", label: "Project Experience", Icon: Users },
  { value: "Facade + Fenestration", label: "System Expertise", Icon: ShieldCheck },
];

const mobileProof: StatCard[] = [
  { value: "2009", label: "Established", Icon: CalendarDays },
  { value: "200+", label: "Projects", Icon: Building2 },
  { value: "Premium", label: "Materials", Icon: ShieldCheck },
];

const reasons: IconCard[] = [
  {
    title: "Precision Engineering",
    text: "Profiles, glass, hardware, and details are planned for fit, finish, and long-term performance.",
    Icon: Award,
  },
  {
    title: "Site Measurement & Consultation",
    text: "Early guidance helps align drawings, site conditions, budgets, and execution timelines.",
    Icon: Users,
  },
  {
    title: "Durable Material Systems",
    text: "Aluminium, uPVC, glazing, cladding, and railing systems are selected for weather exposure and use.",
    Icon: ShieldCheck,
  },
  {
    title: "Weather + Acoustic Performance",
    text: "System recommendations consider sealing, comfort, energy efficiency, and everyday noise control.",
    Icon: Volume2,
  },
  {
    title: "Clean Installation",
    text: "Coordinated installation details help protect finishes and keep site execution predictable.",
    Icon: Wrench,
  },
  {
    title: "After-Sales Support",
    text: "Project handover is supported by serviceability, maintenance guidance, and responsive coordination.",
    Icon: CheckCircle2,
  },
];

const industries: IndustrySegment[] = [
  {
    title: "Residential",
    text: "Elegant openings, railing, and glazing systems for villas, apartments, and premium homes.",
    image: "/images/industry-residential.jpg",
    systems: ["Windows", "Doors", "Railing"],
  },
  {
    title: "Commercial",
    text: "Facade, office partition, and glazing packages for modern workplace environments.",
    image: "/images/industry-commercial.jpg",
    systems: ["Facades", "Partitions", "Glazing"],
  },
  {
    title: "Hospitality",
    text: "Guest-facing entrances, canopies, ceilings, and cladding with refined finish quality.",
    image: "/images/industry-hospitality.jpg",
    systems: ["Entrances", "Cladding", "Ceilings"],
  },
  {
    title: "Infrastructure",
    text: "Durable facade, glazing, and cladding systems for high-use institutional and public projects.",
    image: "/images/industry-infrastructure.jpg",
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

function Button({
  children,
  href = "#contact",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.3} />
    </a>
  );
}

function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="AluEdge home">
      <Image
        alt="AluEdge Fenestration Solutions"
        className="brand__logo"
        height={354}
        priority={priority}
        src="/images/aluedge-logo.png"
        width={1322}
      />
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar__inner">
          <p>Serving Architects, Builders & Developers Across India</p>
          <div className="topbar__contact">
            <span>
              <Phone size={15} /> +91 98765 43210
            </span>
            <span>
              <Mail size={15} /> info@aluedge.in
            </span>
            <span>
              <MapPin size={15} /> Pan-India Service
            </span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <BrandMark priority />
          <nav aria-label="Primary navigation" className="primary-nav">
            {navigation.map((item) =>
              item.children ? (
                <details className="nav-dropdown" key={item.label}>
                  <summary className="primary-nav__link">
                    <span>{item.label}</span>
                    <ChevronDown size={14} strokeWidth={2.4} />
                  </summary>
                  <div className="nav-dropdown__panel">
                    <a className="nav-dropdown__overview" href={item.href}>
                      <span>Explore {item.label}</span>
                      <ArrowRight size={15} strokeWidth={2.3} />
                    </a>
                    {item.children.map((child) => (
                      <a className="nav-dropdown__item" href={child.href} key={child.label}>
                        <span>{child.label}</span>
                        <small>{child.text}</small>
                      </a>
                    ))}
                  </div>
                </details>
              ) : item.href.startsWith("/") ? (
                <Link
                  className={`primary-nav__link${item.label === "Home" ? " active" : ""}`}
                  href={item.href}
                  key={item.label}
                >
                  <span>{item.label}</span>
                </Link>
              ) : (
                <a
                  className={`primary-nav__link${item.label === "Home" ? " active" : ""}`}
                  href={item.href}
                  key={item.label}
                >
                  <span>{item.label}</span>
                </a>
              ),
            )}
          </nav>
          <div className="site-header__actions">
            <button aria-label="Search" className="icon-button icon-button--search" type="button">
              <Search size={21} />
            </button>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu" className="icon-button">
                <Menu size={23} strokeWidth={2.2} />
              </summary>
              <div className="mobile-menu__panel">
                <div className="mobile-menu__links">
                  {navigation.map((item) => (
                    <div className="mobile-menu__group" key={item.label}>
                      {item.href.startsWith("/") ? (
                        <Link
                          className={`mobile-menu__link${item.label === "Home" ? " active" : ""}`}
                          href={item.href}
                        >
                          <span>{item.label}</span>
                          {item.children && <ChevronDown size={14} strokeWidth={2.4} />}
                        </Link>
                      ) : (
                        <a
                          className={`mobile-menu__link${item.label === "Home" ? " active" : ""}`}
                          href={item.href}
                        >
                          <span>{item.label}</span>
                          {item.children && <ChevronDown size={14} strokeWidth={2.4} />}
                        </a>
                      )}
                      {item.children && (
                        <div className="mobile-menu__children">
                          {item.children.map((child) => (
                            <a className="mobile-menu__child" href={child.href} key={child.label}>
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mobile-menu__actions">
                  <a className="mobile-menu__cta mobile-menu__cta--primary" href="#contact">
                    Get Free Quote <ArrowRight size={15} />
                  </a>
                  <a className="mobile-menu__cta mobile-menu__cta--secondary" href="#contact">
                    Book Consultation <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </details>
            <Button>Get Free Quote</Button>
            <Button variant="outline">Book Consultation</Button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow desktop-only">Engineered to perform. Designed to inspire.</p>
            <h1>
              <span className="hero__title-desktop">
                <span>Premium Fenestration</span>
                <span>Solutions for</span>
              </span>
              <span className="hero__title-mobile">
                Premium Fenestration,<br />
                Facade &amp; Glazing<br />
                Solutions
              </span>
              <span className="hero__title-accent desktop-only">Modern Architecture</span>
            </h1>
            <p className="hero__lead desktop-only">
              AluEdge designs and delivers precision-engineered aluminium, uPVC, facade,
              glazing, cladding, ceiling, railing, and architectural systems for residential,
              commercial, hospitality, and infrastructure projects.
            </p>
            <p className="hero__lead mobile-only">
              Advanced aluminium, uPVC windows &amp; doors, façades, cladding, and glazing systems crafted for modern architecture.
            </p>
            <div className="hero__trust desktop-only" aria-label="Project delivery strengths">
              <span>
                <CheckCircle2 size={17} strokeWidth={2.2} /> 200+ projects delivered
              </span>
              <span>
                <Globe2 size={17} strokeWidth={2.2} /> Pan-India execution
              </span>
            </div>
            <div className="hero__actions">
              <Button href="#contact" variant="primary">Get Free Quote</Button>
              <Button href="#contact" variant="outline">Book Consultation</Button>
            </div>
            <a className="hero__contact-link desktop-only" href="#contact">
              For project enquiries, connect with our team <ArrowRight size={15} />
            </a>
          </div>
          <div className="hero__media">
            <Image
              alt="Premium architectural facade with large glass fenestration by AluEdge"
              className="hero__poster"
              fill
              priority
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), (max-width: 1440px) 54vw, 820px"
              src="/images/hero-architecture.jpg"
            />
            <video
              aria-hidden="true"
              autoPlay
              className="hero__video"
              loop
              muted
              playsInline
              poster="/images/hero-architecture.jpg"
              preload="metadata"
            >
              {/* Replace this placeholder path with compressed verified project/facade video.
                  Use a short 5-10 second muted loop, ideally MP4/WebM and under a few MB. */}
              <source media="(min-width: 768px)" src="/videos/aluedge-hero.mp4" type="video/mp4" />
            </video>
            <div className="hero__floating-card">
              <span>Pan-India Project Execution</span>
              <strong>Windows / Facades / Glazing / Cladding</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-proof" aria-label="AluEdge highlights">
        {mobileProof.map(({ value, label, Icon }) => (
          <article key={label}>
            <Icon size={22} strokeWidth={1.7} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="mobile-why" aria-label="Why choose AluEdge">
        <h2>Why Choose AluEdge</h2>
        <div>
          {[
            { title: "Premium Quality", text: "Superior materials for lasting performance.", Icon: ShieldCheck },
            { title: "Expert Team", text: "Skilled professionals committed to excellence.", Icon: Users },
            { title: "Custom Solutions", text: "Tailored systems to match your exact needs.", Icon: Wrench },
            { title: "On-Time Delivery", text: "We value your time and ensure on-time project delivery.", Icon: CalendarDays }
          ].map(({ title, text, Icon }) => (
            <article key={title}>
              <Icon size={25} strokeWidth={1.45} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-strip container" aria-label="Product strengths">
        {featureStrip.map(({ title, text, Icon }) => (
          <article key={title}>
            <Icon size={34} strokeWidth={1.8} />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="solutions container" id="solutions">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Complete fenestration solutions</p>
          <h2>
            <span className="desktop-title">End-to-End Systems for Modern Building Envelopes</span>
            <span className="mobile-title">Products & Services</span>
          </h2>
          <p className="section-heading__text">
            From precision windows and doors to facade, glazing, cladding, ceiling, railing,
            and partition systems, AluEdge coordinates architectural packages with a clear
            performance-first approach.
          </p>
          <a className="mobile-section-link" href="#solutions">
            View All <ArrowRight size={14} />
          </a>
        </div>
        <div className="solutions__grid">
          {solutions.map(({ title, text, Icon, image, features }) => (
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
              <a className="solution-card__action" href="#contact" aria-label={`Discuss ${title} with AluEdge`}>
                Explore solution <ArrowRight size={16} strokeWidth={2.2} />
              </a>
            </article>
          ))}
        </div>
        <div className="solutions__actions desktop-only">
          <Button href="#contact">Discuss Your Requirement</Button>
          <Button href="#projects" variant="secondary">
            View Projects
          </Button>
        </div>
        <div className="solutions__actions mobile-only">
          <Button href="#solutions" variant="primary">View All Products</Button>
        </div>
      </section>

      <section className="projects container" id="projects">
        <div className="projects__intro">
          <p className="eyebrow">Building landmarks together</p>
          <h2>
            <span className="desktop-title">Projects That Define Performance & Beauty</span>
            <span className="mobile-title">Featured Projects</span>
          </h2>
          <p>
            A closer look at AluEdge project applications across residential, commercial,
            hospitality, and infrastructure environments.
          </p>
          <a href="#contact">
            Start Similar Project <ArrowRight size={17} />
          </a>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__image">
                {/* Replace these local placeholders with verified project photography when available. */}
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
                <a href="#contact" aria-label={`Start a project similar to ${project.title}`}>
                  Start similar project <ArrowRight size={15} strokeWidth={2.2} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="projects__actions desktop-only">
          <Button href="#projects" variant="secondary">
            View Project Gallery
          </Button>
          <Button href="#contact">Start Similar Project</Button>
        </div>
        <div className="projects__actions mobile-only">
          <Button href="#projects" variant="primary">View All Projects</Button>
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
            <h2>Built for teams that need reliable execution.</h2>
          </div>
          <p>
            Architects, builders, developers, and homeowners choose AluEdge for system guidance,
            site discipline, and architectural finishes that are made to last.
          </p>
          <Button href="#contact" variant="secondary">
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
            <a href="#solutions">
              Explore Applications <ArrowRight size={17} />
            </a>
          </div>
          <div className="industries__grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.title}>
                {/* Replace these local placeholders with verified segment photography when available. */}
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
        <h2>Built for project teams that need reliable execution.</h2>
        <div>
          {trustedLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="cta container" id="contact">
        <div className="cta__image">
          <Image
            alt="AluEdge building project"
            fill
            sizes="(max-width: 860px) calc(100vw - 32px), (max-width: 1440px) 260px, 300px"
            src="/images/cta-building.jpg"
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
          <Button href="#contact">Get Free Quote</Button>
          <Button href="#solutions" variant="secondary">
            Explore Solutions
          </Button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <BrandMark />
            <p>
              Premium aluminium, uPVC, facade and glazing solutions for modern architecture across
              India.
            </p>
            <div className="footer__contact-actions" aria-label="Primary contact methods">
              <a href="tel:+919876543210">
                <Phone size={15} /> Call
              </a>
              <a href="mailto:info@aluedge.in">
                <Mail size={15} /> Email
              </a>
            </div>
          </div>
          <div className="footer__links">
            <div>
              <h2>Quick Links</h2>
              <Link href="/">Home</Link>
              <a href="#solutions">Products & Services</a>
              <a href="#projects">Projects</a>
              <a href="#why">About Us</a>
              <a href="#resources">Resources</a>
            </div>
            <div>
              <h2>Our Solutions</h2>
              <a href="#solutions">Windows & Doors</a>
              <a href="#solutions">Facade & Glazing</a>
              <a href="#solutions">Cladding Solutions</a>
              <a href="#solutions">Ceiling Systems</a>
              <a href="#solutions">Color & Materials</a>
            </div>
            <div>
              <h2>Resources</h2>
              <a href="#projects">Case Studies</a>
              <a href="#resources">Material Guidance</a>
              <a href="#resources">Applications</a>
              <a href="#contact">Architect Support</a>
              <a href="#contact">Project Consultation</a>
            </div>
            <div>
              <h2>Contact Us</h2>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="mailto:info@aluedge.in">info@aluedge.in</a>
              <p>201, Skyline Tower, Financial District, Hyderabad, Telangana - 500081</p>
              <p>Service area: Pan-India project support</p>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>&copy; 2026 AluEdge Fenestration Solutions. All rights reserved.</p>
          <nav aria-label="Legal links">
            <a href="#resources">Privacy Policy</a>
            <a href="#resources">Terms & Conditions</a>
          </nav>
        </div>
      </footer>

      <div className="mobile-bottom-bar" aria-label="Quick contact actions">
        <a href="#contact">
          <Mail size={15} /> Get Quote
        </a>
        <a href="tel:+919876543210">
          <Phone size={15} /> Call Now
        </a>
      </div>
    </main>
  );
}
