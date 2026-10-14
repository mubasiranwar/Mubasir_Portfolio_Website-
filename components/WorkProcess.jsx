import { workProcess } from '@/data/portfolio';
import { GitBranch, Info, CheckCircle } from 'lucide-react';

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151D2E] border border-[#1E293B] text-xs font-medium text-[#38BDF8] mb-4">
          <GitBranch className="w-3.5 h-3.5" />
          <span>Methodology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F3F4F6] tracking-tight mb-4">
          How I Work
        </h2>
        <p className="text-base sm:text-lg text-[#9CA3AF]">
          A structured, iterative engineering approach from requirements to production deployment.
        </p>
      </div>

      {/* Steps Container: Horizontal on desktop, Vertical on mobile */}
      <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4 mb-12">
        {workProcess.map((item, index) => {
          const isLast = index === workProcess.length - 1;

          return (
            <div
              key={item.step}
              className="group relative flex items-stretch gap-4 lg:block"
            >
              {/* Desktop Header: Circle + Line */}
              <div className="hidden lg:flex items-center w-full mb-4">
                <div className="w-10 h-10 rounded-full bg-[#38BDF8] text-[#0A0F1E] font-bold text-sm flex items-center justify-center shrink-0 shadow-md shadow-[#38BDF8]/20 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                {!isLast ? (
                  <div className="h-[2px] flex-1 bg-[#1E293B] ml-3 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#38BDF8]/50" />
                  </div>
                ) : (
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-[#1E293B] to-transparent ml-3" />
                )}
              </div>

              {/* Mobile Left Column: Circle + Vertical Line */}
              <div className="lg:hidden flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#38BDF8] text-[#0A0F1E] font-bold text-sm flex items-center justify-center shrink-0 shadow-md shadow-[#38BDF8]/20">
                  {item.step}
                </div>
                {!isLast && (
                  <div className="w-[2px] flex-1 bg-[#1E293B] my-2 min-h-[40px] relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#38BDF8]/50" />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 bg-[#111827] border border-[#1E293B] rounded-xl p-5 hover:border-[#38BDF8]/60 hover:bg-[#151D2E]/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider">
                      Phase 0{item.step}
                    </span>
                    <span className="lg:hidden text-xs text-[#9CA3AF]/60 font-mono">
                      Step {item.step}/5
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#F3F4F6] mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1E293B]/60 flex items-center gap-1.5 text-[11px] text-[#9CA3AF]/70">
                  <CheckCircle className="w-3 h-3 text-[#38BDF8]" />
                  <span>Iterative milestone</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small Note at Bottom */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-[#1E293B] text-xs text-[#9CA3AF]">
          <Info className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
          <span>Scope, testing, and delivery depend on the specific project.</span>
        </div>
      </div>
    </section>
  );
}
