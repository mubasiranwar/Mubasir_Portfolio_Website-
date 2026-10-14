import { services } from '@/data/portfolio';
import {
  Brain,
  MessageSquare,
  Workflow,
  Smartphone,
  Server,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const iconMap = {
  Brain,
  MessageSquare,
  Workflow,
  Smartphone,
  Server,
  Lightbulb,
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151D2E] border border-[#1E293B] text-xs font-medium text-[#38BDF8] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Services & Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F3F4F6] tracking-tight mb-4">
          What I Can Help Build
        </h2>
        <p className="text-base sm:text-lg text-[#9CA3AF]">
          Areas where I can contribute to your project
        </p>
      </div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Sparkles;

          return (
            <div
              key={index}
              className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 flex flex-col justify-between hover:border-[#38BDF8]/70 hover:bg-[#151D2E]/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#38BDF8]/5"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#151D2E] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] mb-5 group-hover:border-[#38BDF8]/50 group-hover:scale-110 group-hover:bg-[#38BDF8]/10 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B]/60 flex items-center gap-2 text-xs font-medium text-[#38BDF8] opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Tailored execution</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/60"></span>
                <span>Production grade</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#38BDF8] text-[#0A0F1E] font-semibold hover:bg-[#0ea5e9] transition-all duration-200 shadow-lg shadow-[#38BDF8]/15 hover:shadow-[#38BDF8]/25 hover:translate-y-[-1px]"
        >
          <span>Discuss a Project</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
