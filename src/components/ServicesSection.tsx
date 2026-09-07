import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>('personal-branding');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md">
            Four specialized practices engineered to elevate your reputation, amplify your reach, and convert influence into commercial velocity.
          </p>
        </div>

        {/* Services Grid / Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-zinc-900/90 border-amber-500/40 shadow-xl shadow-amber-950/20 ring-1 ring-amber-500/20'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="p-7 sm:p-9">
                  {/* Top identifier */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {service.number}
                    </span>
                    <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                      Full Scope Practice
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <h4 className="font-editorial italic text-lg sm:text-xl text-amber-200/90 mb-5">
                    {service.tagline}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullets Pill Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-300"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Deliverables Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-zinc-800/80 animate-fade-in">
                      <div className="mb-4">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 block mb-2">
                          Key Deliverables & Framework:
                        </span>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                              <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/80 text-xs text-zinc-400 mb-4">
                        <span className="text-zinc-200 font-semibold block mb-1">Tailored For:</span>
                        {service.idealFor}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Bar / Interactive Buttons */}
                <div className="px-7 sm:px-9 py-4 bg-zinc-950/60 border-t border-zinc-800/60 rounded-b-3xl flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs text-zinc-400 hover:text-zinc-200 font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse Scope' : 'View Deliverables'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    id={`inquire-btn-${service.id}`}
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
