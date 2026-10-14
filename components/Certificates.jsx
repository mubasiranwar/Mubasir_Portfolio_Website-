import Image from 'next/image';
import { certificates, achievements } from '@/data/portfolio';
import {
  Award,
  Trophy,
  GraduationCap,
  ExternalLink,
  FileText,
  Calendar,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export default function Certificates() {
  const getAchievementIcon = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes('topper') || lower.includes('cgpa') || lower.includes('matriculation')) {
      return <GraduationCap className="w-5 h-5 text-[#38BDF8] shrink-0" />;
    }
    if (lower.includes('winner') || lower.includes('laptop')) {
      return <Trophy className="w-5 h-5 text-[#38BDF8] shrink-0" />;
    }
    return <Award className="w-5 h-5 text-[#38BDF8] shrink-0" />;
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151D2E] border border-[#1E293B] text-xs font-medium text-[#38BDF8] mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Credentials & Honors</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F3F4F6] tracking-tight mb-4">
          Certificates & Achievements
        </h2>
        <p className="text-base sm:text-lg text-[#9CA3AF]">
          Verified technical certifications and academic milestones demonstrating continuous learning and recognized excellence.
        </p>
      </div>

      {/* Subsection A: Certificate Gallery */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#1E293B]">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#F3F4F6] flex items-center gap-2">
            <span className="w-2 h-6 bg-[#38BDF8] rounded-full inline-block"></span>
            Certificate Gallery
          </h3>
          <span className="text-xs sm:text-sm text-[#9CA3AF] font-mono">
            {certificates.length} Verified Credentials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const isImage = cert.type === 'image';

            return (
              <div
                key={index}
                className="group flex flex-col justify-between bg-[#111827] border border-[#1E293B] rounded-xl p-4 hover:border-[#38BDF8] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#38BDF8]/5"
              >
                {/* Thumbnail Preview Area */}
                <div>
                  <div className="relative h-48 w-full rounded-lg overflow-hidden bg-[#151D2E] border border-[#1E293B] mb-4 flex items-center justify-center">
                    {isImage ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={cert.file}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[11px] font-medium bg-[#111827]/90 text-[#38BDF8] border border-[#1E293B]">
                          Image
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-4 h-full w-full bg-[#151D2E]">
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-2.5 text-red-400 group-hover:scale-110 transition-transform duration-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400/90 mb-1">
                          PDF Document
                        </span>
                        <p className="text-xs text-[#9CA3AF] line-clamp-2 px-3 font-medium">
                          {cert.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-[#F3F4F6] font-semibold text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-[#38BDF8] transition-colors">
                      {cert.title}
                    </h4>

                    {cert.issuer && (
                      <p className="text-xs sm:text-sm text-[#9CA3AF] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#38BDF8]/80 shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </p>
                    )}

                    {cert.date && (
                      <p className="text-xs text-[#9CA3AF]/80 flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#38BDF8]/80 shrink-0" />
                        <span>{cert.date}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* View Certificate Link */}
                <div className="pt-3 border-t border-[#1E293B]/70 mt-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#38BDF8] hover:text-white transition-colors group/link"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subsection B: Achievements */}
      <div>
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#1E293B]">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#F3F4F6] flex items-center gap-2">
            <span className="w-2 h-6 bg-[#38BDF8] rounded-full inline-block"></span>
            Key Achievements & Recognition
          </h3>
          <span className="text-xs sm:text-sm text-[#9CA3AF] font-mono">
            {achievements.length} Honors
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#151D2E] border border-[#1E293B] rounded-lg p-3.5 flex items-start gap-3 hover:border-[#38BDF8]/60 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center shrink-0 mt-0.5">
                {getAchievementIcon(item.title)}
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-[#F3F4F6] leading-tight">
                  {item.title}
                </h4>
                {item.description ? (
                  <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                ) : (
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-[#38BDF8]/80 font-medium">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>Recognized Merit</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
