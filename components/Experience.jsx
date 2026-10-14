import { experience } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, Building2, Sparkles } from 'lucide-react';

const typeBadgeStyles = {
  Research: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
  Development: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  Leadership: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  Experience: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0A0F1E] text-[#F3F4F6] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#151D2E] text-[#38BDF8] border border-[#1E293B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Track Record & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F4F6]">
            Experience & <span className="text-[#38BDF8]">Leadership</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg">
            Applied research appointments, software development roles, and academic leadership initiatives.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 before:absolute before:left-2.5 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#38BDF8] before:via-[#1E293B] before:to-[#1E293B]">
          <div className="space-y-10 sm:space-y-12">
            {experience.map((item, index) => {
              const badgeStyle =
                typeBadgeStyles[item.type] || 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30';

              return (
                <div key={index} className="relative group">
                  {/* Timeline Node Marker */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#0A0F1E] border-2 border-[#38BDF8] group-hover:scale-125 group-hover:bg-[#38BDF8] transition duration-300 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />

                  {/* Card Container */}
                  <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#151D2E]/80 hover:shadow-xl hover:shadow-[#38BDF8]/5">
                    {/* Header Row: Type Badge & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${badgeStyle}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      {item.date && item.date.trim() !== '' ? (
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#9CA3AF] bg-[#151D2E] px-3 py-1 rounded-md border border-[#1E293B]">
                          <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>{item.date}</span>
                        </div>
                      ) : null}
                    </div>

                    {/* Organization and Title */}
                    <div className="space-y-1.5 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6] group-hover:text-[#38BDF8] transition duration-300 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-[#38BDF8] shrink-0" />
                        <span>{item.organization}</span>
                      </h3>
                      <div className="text-base sm:text-lg font-semibold text-[#F3F4F6]/90 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                    </div>

                    {/* Location (if present) */}
                    {item.location && item.location.trim() !== '' && (
                      <div className="inline-flex items-center gap-1 text-xs text-[#9CA3AF] mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {/* Description Paragraph */}
                    <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed pt-2 border-t border-[#1E293B]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
