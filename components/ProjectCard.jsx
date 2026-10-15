'use client';

import { ExternalLink, Github, ArrowRight, Sparkles, Layers, Activity } from 'lucide-react';

const categoryColorMap = {
  research: {
    label: 'Research',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  },
  fullstack: {
    label: 'Full-Stack',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  },
  ai: {
    label: 'AI',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
  automation: {
    label: 'Automation',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  },
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'Ongoing Research':
      return {
        classes: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
        dot: 'bg-cyan-400 animate-pulse',
      };
    case 'Live Deployment':
      return {
        classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        dot: 'bg-emerald-400 animate-pulse',
      };
    case 'Repository Available':
      return {
        classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        dot: 'bg-emerald-400',
      };
    case 'Client Project':
      return {
        classes: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        dot: 'bg-amber-400',
      };
    default:
      return {
        classes: 'bg-slate-500/10 text-slate-300 border-slate-500/30',
        dot: 'bg-slate-400',
      };
  }
};

export default function ProjectCard({ project, onViewDetails, isFeatured = false }) {
  const categoryMeta = categoryColorMap[project.category] || {
    label: project.category || 'General',
    badge: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
  };

  const statusMeta = getStatusBadge(project.status);
  const featured = isFeatured || project.featured;

  if (featured) {
    return (
      <div className="md:col-span-2 group relative rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#38BDF8]/5 flex flex-col justify-between overflow-hidden">
        {/* Subtle Top Accent Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] via-blue-500 to-indigo-500" />
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured Project
              </span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${categoryMeta.badge}`}
              >
                {categoryMeta.label}
              </span>
            </div>

            <span
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium border ${statusMeta.classes}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dot}`} />
              {project.status}
            </span>
          </div>

          {/* Title and Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] group-hover:text-[#38BDF8] transition-colors leading-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-medium text-[#38BDF8] mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Expanded 2-Column Content on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-1">
            {/* Left Column: Problem & Approach */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#9CA3AF] mb-1.5">
                  The Problem
                </h4>
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {project.approach && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] mb-1.5">
                    Proposed Solution & Methodology
                  </h4>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Implementation Highlights & Telemetry */}
            <div className="space-y-4 lg:border-l lg:border-[#1E293B] lg:pl-6">
              {project.implementation && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F3F4F6] mb-1.5 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Architecture & Components
                  </h4>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {project.implementation}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#9CA3AF] mb-2">
                  Key Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Action Row */}
        <div className="p-6 sm:p-8 pt-4 sm:pt-4 border-t border-[#1E293B] bg-[#151D2E]/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onViewDetails(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#38BDF8] text-[#0A0F1E] hover:bg-[#0ea5e9] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            >
              <span>View Full Research Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg bg-[#151D2E] text-[#9CA3AF] border border-[#1E293B] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
              </a>
            )}
          </div>

          <span className="text-xs text-[#9CA3AF] hidden sm:inline-block">
            UET Peshawar • Secured IoT Devices Lab
          </span>
        </div>
      </div>
    );
  }

  // Regular Project Card
  return (
    <div className="group relative rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#38BDF8]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#38BDF8]/5 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
      <div className="p-6 space-y-4 flex-1">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${categoryMeta.badge}`}
          >
            {categoryMeta.label}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium border ${statusMeta.classes}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dot}`} />
            {project.status}
          </span>
        </div>

        {/* Project Title and Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-[#F3F4F6] group-hover:text-[#38BDF8] transition-colors leading-snug">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs text-[#9CA3AF] mt-1 font-medium line-clamp-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Problem Statement */}
        <p className="text-sm text-[#9CA3AF] line-clamp-3 leading-relaxed">
          {project.problem}
        </p>

        {/* Modular Components Hint (for Automation projects) */}
        {project.components && project.components.length > 0 && (
          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20 font-medium">
              <Layers className="w-3 h-3" />
              {project.components.length} Automated Workflow Modules
            </span>
          </div>
        )}

        {/* Technology Pills */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-medium rounded-md bg-[#151D2E] text-[#9CA3AF] border border-[#1E293B] group-hover:text-[#F3F4F6] transition-colors"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-1.5 py-0.5 text-xs font-medium text-[#9CA3AF]/70">
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="p-6 pt-4 border-t border-[#1E293B] bg-[#151D2E]/30 flex items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-200 group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>

        <div className="flex items-center gap-1.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-[#38BDF8] text-[#0A0F1E] hover:bg-[#0ea5e9] transition-colors"
              aria-label={`View live deployment of ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-lg bg-[#151D2E] text-[#9CA3AF] border border-[#1E293B] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#9CA3AF]/70" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
