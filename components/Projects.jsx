'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ai', label: 'AI' },
  { id: 'automation', label: 'Automation' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute count of projects per category
  const categoryCounts = useMemo(() => {
    const counts = { all: projects.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = projects.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter projects based on activeCategory
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="py-24 bg-[#0A0F1E] text-[#F3F4F6] relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#1E293B] text-xs font-semibold text-[#38BDF8]">
            <FolderGit2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Applied Systems & Research</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F4F6]">
            Selected <span className="text-[#38BDF8]">Projects</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            A curated portfolio spanning predictive hydrological research, full-stack web applications, business automation workflows, and retrieval-augmented AI systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] ${
                  isActive
                    ? 'bg-[#38BDF8] text-[#0A0F1E] font-semibold shadow-lg shadow-[#38BDF8]/20 scale-[1.02]'
                    : 'bg-[#111827] text-[#9CA3AF] border border-[#1E293B] hover:text-[#F3F4F6] hover:border-[#38BDF8]/40 hover:bg-[#151D2E]'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#0A0F1E]/20 text-[#0A0F1E]'
                      : 'bg-[#151D2E] text-[#9CA3AF] border border-[#1E293B]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
                isFeatured={project.featured}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#111827] border border-[#1E293B] max-w-md mx-auto space-y-3">
            <Filter className="w-8 h-8 mx-auto text-[#9CA3AF]" />
            <h3 className="text-base font-semibold text-[#F3F4F6]">
              No projects found
            </h3>
            <p className="text-xs text-[#9CA3AF]">
              No projects match the selected category right now.
            </p>
          </div>
        )}
      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
