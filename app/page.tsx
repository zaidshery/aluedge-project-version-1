import Image from "next/image";
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
};

type StatCard = {
  value: string;
  label: string;
  Icon: LucideIcon;
};

const navigation = [
  "Home",
  "Products & Services",
  "Projects",
  "About Us",
  "Resources",
  "Contact",
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
    text: "High-performance systems for every space and style.",
    Icon: Home,
    image: "/images/industry-residential.jpg",
  },
  {
    title: "Facade & Glazing",
    text: "Striking facades that elevate aesthetics and performance.",
    Icon: Building2,
    image: "/images/industry-commercial.jpg",
  },
  {
    title: "Cladding Solutions",
    text: "Premium materials for durable and modern exteriors.",
    Icon: Layers,
    image: "/images/project-hotel.jpg",
  },
  {
    title: "Railing & Decking",
    text: "Elegant, safe and corrosion-resistant balustrade systems.",
    Icon: Wrench,
    image: "/images/project-airport.jpg",
  },
  {
    title: "Ceiling Systems",
    text: "Functional and aesthetic ceiling solutions.",
    Icon: Layers,
    image: "/images/industry-hospitality.jpg",
  },
  {
    title: "Color & Materials",
    text: "Wide range of finishes to match your vision.",
    Icon: Palette,
    image: "/images/cta-building.jpg",
  },
];

const projects = [
  {
    title: "Luxury Residence",
    type: "Residential",
    location: "Hyderabad, Telangana",
    image: "/images/project-residence.jpg",
  },
  {
    title: "Corporate Office Park",
    type: "Commercial",
    location: "Bengaluru, Karnataka",
    image: "/images/project-office.jpg",
  },
  {
    title: "Five Star Hotel",
    type: "Hospitality",
    location: "Mumbai, Maharashtra",
    image: "/images/project-hotel.jpg",
  },
  {
    title: "International Airport",
    type: "Infrastructure",
    location: "New Delhi, India",
    image: "/images/project-airport.jpg",
  },
];

const stats: StatCard[] = [
  { value: "250+", label: "Projects Completed", Icon: Building2 },
  { value: "10+", label: "Years of Expertise", Icon: Award },
  { value: "500+", label: "Happy Clients", Icon: Users },
  { value: "25+", label: "Cities Covered", Icon: Globe2 },
];

const mobileProof: StatCard[] = [
  { value: "2009", label: "Established", Icon: CalendarDays },
  { value: "200+", label: "Projects", Icon: Building2 },
  { value: "Premium", label: "Materials", Icon: ShieldCheck },
];

const reasons: IconCard[] = [
  {
    title: "Architects' First Choice",
    text: "Trusted by leading architects and consultants",
    Icon: Award,
  },
  { title: "Custom Engineered", text: "Solutions tailored to each project need", Icon: Wrench },
  {
    title: "Tested & Certified",
    text: "Products tested for safety and performance",
    Icon: CheckCircle2,
  },
  { title: "Pan-India Support", text: "On-time service, every time", Icon: Globe2 },
  {
    title: "Sustainable Impact",
    text: "Energy-efficient solutions for a greener tomorrow",
    Icon: Leaf,
  },
];

const industries = [
  {
    title: "Residential",
    text: "Spaces that feel like home",
    image: "/images/industry-residential.jpg",
  },
  {
    title: "Commercial",
    text: "Smart solutions for modern workplaces",
    image: "/images/industry-commercial.jpg",
  },
  {
    title: "Hospitality",
    text: "Elevate guest experience",
    image: "/images/industry-hospitality.jpg",
  },
  {
    title: "Infrastructure",
    text: "Built for large-scale performance",
    image: "/images/industry-infrastructure.jpg",
  },
];

const trustedLogos = ["DLF", "LODHA", "Prestige", "Godrej Properties", "Brigade", "RMZ Corp"];

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <a className={`button button--${variant}`} href="#contact">
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.3} />
    </a>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#" aria-label="AluEdge home">
      <Image
        alt="AluEdge Fenestration Solutions"
        className="brand__logo"
        height={354}
        priority
        src="/images/aluedge-logo.png"
        width={1322}
      />
    </a>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar__inner">
          <p>Trusted by Architects, Builders & Developers Across India</p>
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
          <BrandMark />
          <nav aria-label="Primary navigation">
            {navigation.map((item) => (
              <a className={item === "Home" ? "active" : ""} href="#" key={item}>
                {item}
                {(item === "Products & Services" || item === "Resources") && (
                  <ChevronDown size={14} strokeWidth={2.4} />
                )}
              </a>
            ))}
          </nav>
          <div className="site-header__actions">
            <button aria-label="Search" className="icon-button icon-button--search" type="button">
              <Search size={21} />
            </button>
            <details className="mobile-menu">
              <summary aria-label="Open menu" className="icon-button">
                <Menu size={23} strokeWidth={2.2} />
              </summary>
              <div className="mobile-menu__panel">
                {navigation.map((item) => (
                  <a className={item === "Home" ? "active" : ""} href="#" key={item}>
                    <span>{item}</span>
                    {(item === "Products & Services" || item === "Resources") && (
                      <ChevronDown size={14} strokeWidth={2.4} />
                    )}
                  </a>
                ))}
                <a className="mobile-menu__quote" href="#contact">
                  Get Free Quote <ArrowRight size={15} />
                </a>
              </div>
            </details>
            <Button variant="outline">Get Free Quote</Button>
            <Button>Book Consultation</Button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Engineered to perform. Designed to inspire.</p>
            <h1>
              <span className="hero__title-desktop">
                Premium Fenestration Solutions for
                <span className="hero__title-accent">Modern Architecture</span>
              </span>
              <span className="hero__title-mobile">
                Premium Fenestration, Facade & Glazing Solutions
              </span>
            </h1>
            <p className="hero__lead">
              High-performance windows, doors, facades and cladding systems crafted with
              precision engineering, elevated aesthetics, and lasting durability.
            </p>
            <div className="hero__actions hero__actions-desktop">
              <Button>Explore Solutions</Button>
              <Button variant="secondary">View Projects</Button>
            </div>
            <div className="hero__actions hero__actions-mobile">
              <Button>Get Free Quote</Button>
              <Button variant="secondary">Book Consultation</Button>
            </div>
          </div>
          <div className="hero__media">
            <Image
              alt="Modern glass residence with premium fenestration"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 54vw"
              src="/images/hero-architecture.jpg"
            />
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
          {reasons.slice(1, 5).map(({ title, text, Icon }) => (
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
            <span className="desktop-title">End-to-End Solutions for Every Building</span>
            <span className="mobile-title">Products & Services</span>
          </h2>
          <a className="mobile-section-link" href="#">
            View All <ArrowRight size={14} />
          </a>
        </div>
        <div className="solutions__grid">
          {solutions.map(({ title, text, Icon, image }) => (
            <article className="solution-card" key={title}>
              <div className="solution-card__image">
                <Image alt={`${title} by AluEdge`} height={130} src={image} width={190} />
              </div>
              <Icon size={38} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowRight size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="projects container" id="projects">
        <div className="projects__intro">
          <p className="eyebrow">Building landmarks together</p>
          <h2>
            <span className="desktop-title">Projects That Define Performance & Beauty</span>
            <span className="mobile-title">Featured Projects</span>
          </h2>
          <a href="#">
            View All Projects <ArrowRight size={17} />
          </a>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <Image
                alt={`${project.title} project`}
                height={178}
                src={project.image}
                width={280}
              />
              <div className="project-card__body">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
                <span>{project.type}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stats container">
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
            <h2>Our Promise</h2>
            <p>On-time delivery, uncompromised quality, and solutions that stand the test of time.</p>
          </div>
          <ShieldCheck size={54} strokeWidth={1.5} />
        </aside>
      </section>

      <section className="why container">
        <div className="section-heading">
          <p className="eyebrow">Why choose AluEdge?</p>
          <h2>Built on Trust. Driven by Excellence.</h2>
        </div>
        <div className="why__grid">
          {reasons.map(({ title, text, Icon }) => (
            <article key={title}>
              <Icon size={34} strokeWidth={1.6} />
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
            <a href="#">
              Explore Applications <ArrowRight size={17} />
            </a>
          </div>
          <div className="industries__grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.title}>
                <Image
                  alt={`${industry.title} fenestration application`}
                  fill
                  sizes="(max-width: 900px) 45vw, 18vw"
                  src={industry.image}
                />
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trusted container" aria-label="Trusted by industry leaders">
        <p className="eyebrow">Trusted by industry leaders</p>
        <div>
          {trustedLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="cta container" id="contact">
        <div className="cta__image">
          <Image alt="AluEdge building project" fill sizes="180px" src="/images/cta-building.jpg" />
        </div>
        <div>
          <h2>Let&apos;s Build Something Exceptional Together</h2>
          <p>Share your vision with us and let&apos;s turn it into reality.</p>
        </div>
        <div className="cta__actions">
          <Button>Get Free Quote</Button>
          <Button variant="secondary">Book Consultation</Button>
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
          </div>
          <div className="footer__links">
            <div>
              <h2>Quick Links</h2>
              <a href="#">Home</a>
              <a href="#">Products & Services</a>
              <a href="#">Projects</a>
              <a href="#">About Us</a>
              <a href="#">Resources</a>
            </div>
            <div>
              <h2>Our Solutions</h2>
              <a href="#">Windows & Doors</a>
              <a href="#">Facade & Glazing</a>
              <a href="#">Cladding Solutions</a>
              <a href="#">Ceiling Systems</a>
              <a href="#">Color & Materials</a>
            </div>
            <div>
              <h2>Resources</h2>
              <a href="#">Brochures</a>
              <a href="#">Case Studies</a>
              <a href="#">Blogs</a>
              <a href="#">FAQs</a>
              <a href="#">Downloads</a>
            </div>
            <div>
              <h2>Contact Us</h2>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="mailto:info@aluedge.in">info@aluedge.in</a>
              <p>201, Skyline Tower, Financial District, Hyderabad, Telangana - 500081</p>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>&copy; 2024 AluEdge Fenestration Solutions. All rights reserved.</p>
          <p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p>
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
