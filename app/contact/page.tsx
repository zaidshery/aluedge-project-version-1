"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Shield, ChevronDown } from "lucide-react";
import Button from "../../components/Button";
import { businessDetails } from "../../components/businessDetails";
import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";
import GlowingSocialLinks from "../../components/GlowingSocialLinks";

const faqs = [
  {
    q: "How early should we bring AluEdge into the project timeline?",
    a: "We recommend consulting during the architectural blueprint or drawing validation phase (typically 3 to 6 months before structural openings are finished). Early consultation allows us to coordinate profile choices, wind load specs, drainage, and threshold details directly with your structural teams, avoiding costly modifications later.",
  },
  {
    q: "Do you supply and install materials, or just fabricate?",
    a: "AluEdge provides a single-source solution. We coordinate the full process: custom profile fabrication, structural glass selection, precision site assembly, and supervised onsite installation. This end-to-end management guarantees that system performances (acoustic, thermal, sealing) meet structural criteria.",
  },
  {
    q: "What is your typical lead time for custom fenestration packages?",
    a: "Lead times range from 4 to 8 weeks, depending on system complexity, profile sourcing, custom powder coating (RAL shades), and project scale. Once apertures are surveyed and approved, we provide a binding execution schedule.",
  },
  {
    q: "What warranties do you provide on profiles and hardware?",
    a: "Our high-end aluminium and uPVC profiles carry up to a 10-year surface finish and structural integrity warranty. High-quality European anchoring hardware and EPDM weather seals carry up to 5 years, backed by direct service support.",
  },
  {
    q: "Do you customize profiles for specific wind loads?",
    a: "Yes. For high-rise residential facades and open commercial envelopes, we execute wind pressure calculations based on geographic locations (per IS 875 standard) and customize profile chambers and glass thickness accordingly.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [segment, setSegment] = useState("Residential");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("Premium Aluminium Systems");
  const [timeline, setTimeline] = useState("Immediate Execution");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in Name, Email, and Phone number.");
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          segment,
          area,
          budget,
          timeline,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to submit inquiry right now.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit inquiry right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <>
      <PageHero
        eyebrow="Project inquiry & support"
        title="Ready to Discuss Your Architectural Project?"
        description="Share your drawings, specification sheets, or outline requirements. Our engineering team will review and connect within 24 business hours."
      />

      {/* Main Form and Info Grid */}
      <section className="container visual-section grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        
        {/* Glassmorphic Intake Form */}
        <div className="bg-white border border-line rounded-lg p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(7,21,38,0.03)] relative overflow-hidden">
          {/* Accent strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-green" />

          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-green flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-3 font-semibold">Inquiry Received Successfully</h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
                Thank you for reaching out, <strong>{name}</strong>. An AluEdge technical representative will contact you at <strong>{phone}</strong> or <strong>{email}</strong> within 24 hours to discuss your {segment.toLowerCase()} project details.
              </p>
              
              <div className="bg-paper border border-line rounded-xl p-6 text-left max-w-md mx-auto">
                <h3 className="text-xs font-black tracking-wider uppercase text-green mb-4">Summary of Requirements</h3>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li className="flex justify-between border-b border-line/50 pb-2">
                    <span className="text-muted">Project Segment:</span> 
                    <strong className="font-extrabold">{segment}</strong>
                  </li>
                  <li className="flex justify-between border-b border-line/50 pb-2">
                    <span className="text-muted">Glazing Aperture Area:</span> 
                    <strong className="font-extrabold">{area ? `${area} sq ft` : "Not specified"}</strong>
                  </li>
                  <li className="flex justify-between border-b border-line/50 pb-2">
                    <span className="text-muted">Target Quality / Budget:</span> 
                    <strong className="font-extrabold">{budget}</strong>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span className="text-muted">Timeline:</span> 
                    <strong className="font-extrabold">{timeline}</strong>
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setSubmitError("");
                }}
                className="mt-8 bg-transparent border-0 text-green font-black cursor-pointer text-sm hover:underline"
              >
                Submit another inquiry &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-line pb-5">
                <h2 className="font-display text-2xl text-ink font-semibold">Intake Specification Form</h2>
                <p className="text-muted text-xs mt-1.5">Step-by-step project scoping details for our estimators</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name-input" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Full Name *</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full h-11 rounded-lg border border-line px-4 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone-input" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Phone Number *</label>
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full h-11 rounded-lg border border-line px-4 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-input" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Email Address *</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full h-11 rounded-lg border border-line px-4 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="segment-select" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Project Segment</label>
                  <select
                    id="segment-select"
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full h-11 rounded-lg border border-line px-3 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.25em 1.25em', backgroundRepeat: 'no-repeat', paddingRight: '2.5rem' }}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hospitality</option>
                    <option>Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="area-input" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Approx. Glazing Area (Sq Ft)</label>
                  <input
                    id="area-input"
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 1500"
                    className="w-full h-11 rounded-lg border border-line px-4 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quality-select" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Target Quality / Budget</label>
                  <select
                    id="quality-select"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 rounded-lg border border-line px-3 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.25em 1.25em', backgroundRepeat: 'no-repeat', paddingRight: '2.5rem' }}
                  >
                    <option>Premium Aluminium Systems</option>
                    <option>Thermally Broken Custom Systems</option>
                    <option>High Performance uPVC Systems</option>
                    <option>Facade Curtain Walls Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline-select" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Project Timeline</label>
                  <select
                    id="timeline-select"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full h-11 rounded-lg border border-line px-3 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.25em 1.25em', backgroundRepeat: 'no-repeat', paddingRight: '2.5rem' }}
                  >
                    <option>Immediate Execution</option>
                    <option>Within 3 Months</option>
                    <option>3 to 6 Months</option>
                    <option>Planning / Drawing stage</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message-textarea" className="block text-[11px] font-black tracking-wider text-ink mb-2 uppercase">Project Specifications / Notes</label>
                <textarea
                  id="message-textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about special glass parameters, wind speed targets, acoustic needs, or RAL colors..."
                  className="w-full rounded-lg border border-line p-4 text-sm outline-none bg-surface focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white transition-all duration-200 resize-y"
                />
              </div>

              <div className="flex gap-3 items-center text-xs text-muted border-t border-line pt-5 mt-2">
                <Shield size={16} className="text-green flex-shrink-0" />
                <span>Your site details are encrypted and treated with strict privacy parameters.</span>
              </div>

              {submitError && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                  {submitError}
                </p>
              )}

              <div className="pt-2">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Intake Form"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Office Contact Coordinates & Map */}
        <div className="space-y-6">
          
          <div className="bg-gradient-to-br from-[#071526] via-[#0c2b3d] to-[#04121d] text-white border border-white/5 rounded-lg p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <span className="font-display tracking-widest text-xs font-black uppercase text-bronze">DIRECT COORDINATES</span>
            <h2 className="font-display text-2xl text-white mt-3 mb-6 font-semibold">Indore Experience Centre</h2>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4 items-start">
                <MapPin size={22} className="text-bronze flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[10px] font-black tracking-widest text-white/50 uppercase mb-1">Experience Centre</h3>
                  <p className="text-sm text-[#dce6ef] leading-relaxed">{businessDetails.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone size={22} className="text-bronze flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[10px] font-black tracking-widest text-white/50 uppercase mb-1">Call Direct</h3>
                  <a href={businessDetails.phoneHref} className="text-[#fff] font-bold text-lg hover:underline transition-all">{businessDetails.phone}</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail size={22} className="text-bronze flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-[10px] font-black tracking-widest text-white/50 uppercase mb-1">Email Technical Desk</h3>
                  {businessDetails.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-[#fff] font-bold text-sm block hover:underline transition-all mt-0.5">{email}</a>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-6">
                <h3 className="text-[10px] font-black tracking-widest text-white/50 uppercase mb-4">Connect on Social</h3>
                <GlowingSocialLinks className="!items-start" />
              </div>
            </div>
          </div>

          {/* Premium Google Map Mockup */}
          <div className="border border-line rounded-lg bg-surface h-[280px] relative overflow-hidden shadow-[0_8px_30px_rgba(7,21,38,0.02)] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-slate-800/10 z-1" />
            
            {/* Styled Map background abstract elements */}
            <div className="absolute top-[40px] left-[60px] width-[120px] h-[8px] bg-slate-200/40 rounded-full -rotate-12 pointer-events-none" />
            <div className="absolute top-[80px] left-[180px] width-[140px] h-[8px] bg-slate-200/40 rounded-full rotate-45 pointer-events-none" />
            <div className="absolute top-[120px] left-[10px] width-[200px] h-[8px] bg-slate-200/40 rounded-full rotate-[8deg] pointer-events-none" />
            
            {/* Map Pin marker */}
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
              <div className="w-[42px] h-[42px] rounded-full bg-green text-white flex items-center justify-center shadow-[0_8px_20px_rgba(17,115,62,0.35)] animate-bounce">
                <MapPin size={20} />
              </div>
              <div className="w-1 h-2 bg-green -mt-0.5" />
            </div>

            <div className="bg-white/95 backdrop-blur-md border-t border-line p-5 z-20 relative flex justify-between items-center gap-4">
              <div>
                <strong className="text-xs sm:text-sm text-ink block font-bold">3-FA, Scheme No. 94</strong>
                <span className="text-[11px] text-muted block mt-0.5">Near Pipliyahana Square, Ring Road, Indore-452016</span>
              </div>
              <a 
                href="https://maps.google.com/?q=3-FA,+Scheme+No.+94,+Near+Pipliyahana+Square,+Ring+Road,+Indore+452016" 
                target="_blank" 
                rel="noreferrer"
                className="text-[11px] text-green font-black border border-green rounded px-3 py-2 bg-white hover:bg-emerald-50 transition-all flex-shrink-0"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Collapsible Accordion FAQs */}
      <section className="visual-section visual-section--paper">
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Common queries"
            title="Architectural Consultation & Timelines"
            description="Important technical parameters to consider before finalizing fenestration contracts."
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-line rounded-xl bg-surface-strong overflow-hidden shadow-[0_4px_16px_rgba(7,21,38,0.01)] transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 bg-transparent border-0 flex justify-between items-center gap-5 cursor-pointer"
                  >
                    <strong className="text-sm sm:text-base text-ink font-extrabold leading-snug">{faq.q}</strong>
                    <ChevronDown 
                      size={20} 
                      className={`text-muted flex-shrink-0 transition-transform duration-300 ${isOpen ? "text-green rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-muted leading-relaxed border-t border-paper/10 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

