import { skills } from '@/data/portfolio';
import { Brain, Bot, Monitor, Database, Wrench, Sparkles } from 'lucide-react';

const categoryIconMap = {
  'AI & Machine Learning': Brain,
  'LLM Applications & Automation': Bot,
  'Frontend Engineering': Monitor,
  'Backend & Databases': Database,
  'Tools & Development': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0A0F1E] text-[#F3F4F6] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#151D2E] text-[#38BDF8] border border-[#1E293B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Tooling & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F4F6]">
            Technical <span className="text-[#38BDF8]">Skills</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg">
            Engineering capabilities across machine learning pipelines, LLM agent architectures, full-stack frameworks, and developer tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((categoryGroup, index) => {
            const IconComponent = categoryIconMap[categoryGroup.category] || Brain;
            const isLastOddItem =
              index === skills.length - 1 && skills.length % 3 === 2;

            return (
              <div
                key={categoryGroup.category}
                className={`bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#38BDF8]/50 hover:bg-[#151D2E]/60 transition-all duration-300 shadow-lg group ${
                  isLastOddItem ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#1E293B]">
                    <div className="w-11 h-11 rounded-xl bg-[#151D2E] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:border-[#38BDF8]/40 transition duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F3F4F6] group-hover:text-[#38BDF8] transition duration-300">
                      {categoryGroup.category}
                    </h3>
                  </div>

                  {/* Skills Chips / Pills (NO percentages/ratings) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#151D2E] text-[#9CA3AF] text-sm px-3 py-1.5 rounded-full border border-[#1E293B]/70 hover:text-[#F3F4F6] hover:border-[#38BDF8]/40 hover:bg-[#111827] transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtext footer */}
                <div className="mt-6 pt-3 text-xs text-[#9CA3AF]/60 flex items-center justify-between">
                  <span>{categoryGroup.items.length} technologies</span>
                  <span className="text-[#38BDF8]/70 text-xs font-mono">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
