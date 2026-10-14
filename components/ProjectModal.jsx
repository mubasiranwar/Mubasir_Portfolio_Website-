'use client';

import { useEffect, useCallback } from 'react';
import {
  X,
  ExternalLink,
  Github,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Layers,
  Cpu,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  GitBranch,
} from 'lucide-react';

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
    label: 'AI / Machine Learning',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
  automation: {
    label: 'Intelligent Automation',
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

const getComponentStatusBadge = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed':
    case 'deployed':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    case 'in development':
    case 'in progress':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    case 'planned':
    default:
      return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
  }
};

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on Escape key press
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  const categoryMeta = categoryColorMap[project.category] || {
    label: project.category || 'General',
    badge: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
  };

  const statusMeta = getStatusBadge(project.status);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl bg-[#111827] border border-[#1E293B] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col transform transition-all duration-300 animate-in fade-in zoom-in-95">
        {/* Top Decorative Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#38BDF8] via-blue-500 to-purple-500" />

        {/* Modal Header */}
        <div className="p-6 pb-4 sm:p-8 sm:pb-5 border-b border-[#1E293B] bg-[#151D2E]/60 relative">
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-lg text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#1E293B] border border-transparent hover:border-[#1E293B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2.5 mb-3 pr-10">
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
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium border border-amber-500/30 bg-amber-500/10 text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Featured Project
              </span>
            )}
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] tracking-tight leading-snug"
          >
            {project.title}
          </h2>

          {project.subtitle && (
            <p className="text-sm sm:text-base text-[#38BDF8] font-medium mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm sm:text-base leading-relaxed">
          {/* Problem Statement */}
          {project.problem && (
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                Problem Statement
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed bg-[#151D2E]/40 p-4 rounded-xl border border-[#1E293B]/70">
                {project.problem}
              </p>
            </div>
          )}

          {/* Approach */}
          {project.approach && (
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                Architectural Approach
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed bg-[#151D2E]/40 p-4 rounded-xl border border-[#1E293B]/70">
                {project.approach}
              </p>
            </div>
          )}

          {/* Implementation Details */}
          {project.implementation && (
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                Implementation Details
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed bg-[#151D2E]/40 p-4 rounded-xl border border-[#1E293B]/70">
                {project.implementation}
              </p>
            </div>
          )}

          {/* Component Status Table (for plumber automation or projects with components) */}
          {project.components && project.components.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#38BDF8]" />
                  Modular Component Breakdown
                </h3>
                <span className="text-xs text-[#9CA3AF] italic">
                  Configurable statuses
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#1E293B] bg-[#151D2E]/30">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#1E293B] bg-[#151D2E]/70 text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider">
                      <th className="py-3 px-4">Component Module</th>
                      <th className="py-3 px-4 text-right">Deployment Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {project.components.map((comp, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#151D2E]/50 transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-[#F3F4F6]">
                          {comp.name}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${getComponentStatusBadge(
                              comp.status
                            )}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            {comp.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Future Work (if present) */}
          {project.futureWork && (
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#38BDF8]" />
                Next Steps & Future Roadmap
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed bg-[#151D2E]/40 p-4 rounded-xl border border-[#1E293B]/70">
                {project.futureWork}
              </p>
            </div>
          )}

          {/* Limitations Callout (clearly labeled) */}
          {project.limitations && (
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200/90 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Scope & Evaluation Disclaimers</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed pl-6">
                {project.limitations}
              </p>
            </div>
          )}

          {/* Technology Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#38BDF8] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#1E293B] bg-[#151D2E]/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#38BDF8] text-[#0A0F1E] hover:bg-[#0ea5e9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {!project.github && !project.demo && (
              <span className="text-xs text-[#9CA3AF] italic flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#9CA3AF]" />
                Repository / IP subject to research or client agreement
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#151D2E] text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#1E293B] border border-[#1E293B] transition-colors ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
