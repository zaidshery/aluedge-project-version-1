import React from "react";
import Image from "next/image";
import { Award, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import Button from "../../components/Button";

const values = [
  {
    title: "Precision Engineering",
    text: "Every millimeter matters. We plan profiles, seals, glass panels, and heavy-duty structural hardware to match precise site elevations and strict wind pressure specs.",
    Icon: Compass,
  },
  {
    title: "System Performance",
    text: "We never compromise on thermal transmittance (U-values), sound reduction (acoustic dB damping), and strict air-water tightness, ensuring everyday indoor comfort.",
    Icon: ShieldCheck,
  },
  {
    title: "Disciplined Site Execution",
    text: "Early layout consultation, laser site measurements, and coordinated installation checklists keep execution predictable and keep your site finishes protected.",
    Icon: Award,
  },
  {
    title: "Customer Commitment",
    text: "Handover is backed by post-installation warranty support, clear glass maintenance guides, and direct lines to our service team to resolve any operational checks.",
    Icon: HeartHandshake,
  },
];

const timeline = [
  {
    year: "2009",
    title: "Foundation of AluEdge",
    text: "Established in Hyderabad with a focus on high-end custom window fabrications.",
  },
  {
    year: "2013",
    title: "Expanding to Facades & Cladding",
    text: "Delivered our first semi-unitized curtain wall facade in the IT corridor of Bengaluru.",
  },
  {
    year: "2017",
    title: "Precision Engineering Center",
    text: "Partnered with premium European system providers to design elite thermally-broken aluminium doors.",
  },
  {
    year: "2021",
    title: "Pan-India Expansion",
    text: "Scaled up operations to support developers, builders, and leading architecture firms nationwide.",
  },
  {
    year: "2026",
    title: "Modern Architectural Envelopes",
    text: "Recognized as a leading Indian single-source provider for complete high-performance fenestration packages.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Technical Consultation",
    desc: "We analyze structural drawings, floorplans, climate exposure, and custom architectural intent.",
  },
  {
    step: "02",
    title: "Site Laser Survey",
    desc: "Our engineers execute laser-guided site surveys to ensure perfect aperture dimensions before fabrication.",
  },
  {
    step: "03",
    title: "System Customization",
    desc: "Selection of profile models, powder coating (RAL shades), glass solar properties, and custom hardware.",
  },
  {
    step: "04",
    title: "Predictable Installation",
    desc: "Coordinated onsite installation by trained assembly teams, using specialized sealants and anchoring.",
  },
  {
    step: "05",
    title: "Handover & Handshake",
    desc: "Final calibration checks, acoustic insulation tests, and handover of care kits and warranty documents.",
  },
];

export const metadata = {
  title: "About Us | AluEdge Fenestration Solutions",
  description: "Learn about AluEdge's legacy of precision engineering, core values, site consultation process, and commitment to architectural excellence since 2009.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061928] via-[#0d2536] to-[#04121d] text-white py-16 lg:py-24 border-b-4 border-bronze">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="font-display tracking-[0.2em] text-xs font-black uppercase text-bronze">THE ALUEDGE STORY</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-4 mb-6 leading-[1.1] text-white">
              Redefining Modern Architecture Since 2009
            </h1>
            <p className="text-[#bdc8d2] text-sm sm:text-base leading-relaxed max-w-xl">
              ALUEDGE, established in 2009, is a trusted pioneer in façade systems, aluminium, and uPVC windows and doors. We focus on delivering high-quality products that seamlessly combine modern design, engineering precision, strong durability, and smooth performance.
            </p>
            <p className="text-[#bdc8d2] text-sm sm:text-base leading-relaxed max-w-xl mt-4">
              Our architectural solutions cater to residential, commercial, and industrial spaces. By using premium materials and advanced technology, we ensure our products offer maximum strength, optimal insulation, and a long-lasting life. From design and fabrication to complete installation and maintenance, our experienced team ensures professional, on-time delivery with rigorous attention to every detail.
            </p>
          </div>
          <div className="relative h-[260px] sm:h-[380px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              alt="Premium architectural glass facade details"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              src="/images/optimized/aluedge-hero-campus-1600.webp"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Core Stats Section */}
      <section className="bg-paper border-b border-line py-10">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div className="p-6 bg-white border border-line rounded-2xl shadow-sm">
            <span className="block font-display text-4xl sm:text-5xl font-extrabold text-green mb-2">200+</span>
            <strong className="block text-sm text-ink uppercase tracking-wider font-extrabold">Successfully Completed Projects</strong>
            <span className="text-xs text-muted mt-1 block">Across diverse sectors nationwide</span>
          </div>
          <div className="p-6 bg-white border border-line rounded-2xl shadow-sm">
            <span className="block font-display text-4xl sm:text-5xl font-extrabold text-green mb-2">15+ Years</span>
            <strong className="block text-sm text-ink uppercase tracking-wider font-extrabold">of Industry Excellence</strong>
            <span className="text-xs text-muted mt-1 block">Established in 2009, pioneering innovation</span>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-16 lg:py-24">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="font-display tracking-widest text-xs font-black uppercase text-green">OUR DRIVING FORCE</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">The Values That Frame Our Work</h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed mt-4">
            Every system designed, every site coordinated, and every joint sealed is driven by our commitment to delivering durable quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <article 
              key={i} 
              className="border border-line rounded-2xl p-6 bg-surface-strong shadow-[0_8px_30px_rgba(7,21,38,0.02)] hover:-translate-y-1 hover:shadow-xl hover:border-green/20 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-green flex items-center justify-center mb-6">
                <v.Icon size={24} />
              </div>
              <h3 className="text-lg font-extrabold mb-3 text-ink">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive History Timeline */}
      <section className="bg-paper py-16 lg:py-24 border-y border-line">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display tracking-widest text-xs font-black uppercase text-green">MILESTONES & EVOLUTION</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">Our Journey of Engineering Precision</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-green/20 -translate-x-1/2 pointer-events-none" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative flex flex-col pl-10 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-20 items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-green border-3 border-white -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(17,115,62,0.16)]" />

                  {idx % 2 === 0 ? (
                    <>
                      <div className="text-left lg:text-right w-full lg:pr-10">
                        <span className="font-display text-2xl lg:text-3xl font-extrabold text-green">{item.year}</span>
                        <h3 className="text-base lg:text-lg font-extrabold mt-1 mb-2 text-ink">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="text-left w-full lg:pl-10">
                        <span className="font-display text-2xl lg:text-3xl font-extrabold text-green">{item.year}</span>
                        <h3 className="text-base lg:text-lg font-extrabold mt-1 mb-2 text-ink">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation and Site Consultation Process */}
      <section className="container py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-display tracking-widest text-xs font-black uppercase text-green">THE ALUEDGE WORKFLOW</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">A Disciplined Approach From Blueprint to Handover</h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed mt-4">
            Excellent systems require absolute care during installation. Here is how we ensure your profiles look and perform precisely as specified.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-surface-strong border border-line rounded-2xl p-6 relative min-h-[220px] flex flex-col justify-between hover:shadow-lg hover:border-green/20 transition-all duration-300"
            >
              <div>
                <span className="font-display text-4xl font-black text-green/10 block mb-4 leading-none">
                  {step.step}
                </span>
                <h3 className="text-base font-extrabold mb-2 text-ink">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-paper py-16 lg:py-24 border-t border-line">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 bg-gradient-to-br from-[#061928] to-[#0a2536] text-white rounded-2xl border-b-4 border-bronze shadow-lg">
            <span className="font-display tracking-[0.2em] text-xs font-black uppercase text-bronze">OUR VISION</span>
            <h2 className="font-display text-2xl sm:text-3xl font-medium mt-3 mb-4 text-white">Redefining Modern Spaces</h2>
            <p className="text-sm text-[#bdc8d2] leading-relaxed">
              To become a world-class leading brand and redefine modern architecture through innovative, stylish, and durable façade, glazing, and door-window solutions.
            </p>
          </div>
          <div className="p-8 bg-white border border-line rounded-2xl shadow-sm">
            <span className="font-display tracking-[0.2em] text-xs font-black uppercase text-green">OUR MISSION</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-3 mb-4 text-ink">Commitment to Excellence</h2>
            <ul className="p-0 m-0 list-none space-y-3.5 text-sm text-muted">
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                <span>To provide top-quality products and modern design solutions at affordable prices.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                <span>To ensure complete customer satisfaction and maintain long-term relationships with our clients.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                <span>To continuously improve through innovation, advanced technology, and sustainable practices.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                <span>To maintain strict project timelines without compromising on quality.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mb-16 lg:mb-24">
        <div className="cta__content rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-5xl mx-auto overflow-hidden relative bg-gradient-to-br from-[#061928] via-[#0d2536] to-[#04121d] border-b-4 border-bronze">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,115,62,0.15),transparent_60%)] pointer-events-none" />
          <div className="relative z-10">
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">ARCHITECT & DEVELOPER SUPPORT</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-4 mb-6">Connect with AluEdge Engineers today.</h2>
            <p className="text-[#d8e3ec] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Let us consult on your engineering drawings, budget metrics, and installation timelines. We provide full drawing and profile customization support.
            </p>
            <div className="flex justify-center">
              <Button href="/contact">Book Site Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

