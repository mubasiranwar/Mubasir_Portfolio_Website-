import Image from 'next/image';
import { personalInfo, education, achievements } from '@/data/portfolio';
import { GraduationCap, Award, Trophy, BookOpen, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const topperAchievement = achievements.find((a) => a.title.toLowerCase().includes('topper'));

  return (
    <section id="about" className="py-20 bg-[#0A0F1E] text-[#F3F4F6] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#151D2E] text-[#38BDF8] border border-[#1E293B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F4F6]">
            About <span className="text-[#38BDF8]">Me</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg">
            Engineering intelligent systems, robust AI pipelines, and practical full-stack web solutions.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Image with Styled Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#38BDF8] via-[#1E293B] to-[#38BDF8]/40 rounded-3xl opacity-70 group-hover:opacity-100 transition duration-500 blur-sm" />
              
              <div className="relative rounded-2xl bg-[#111827] border border-[#1E293B] p-3 sm:p-4 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#151D2E]">
                  <Image
                    src={personalInfo.profileImage || '/images/profile.jpg'}
                    alt={`${personalInfo.name} - AI Engineer`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#111827]/90 backdrop-blur-md rounded-lg border border-[#1E293B] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#9CA3AF]">Status</div>
                      <div className="text-sm font-semibold text-[#F3F4F6] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for AI / Web roles
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#9CA3AF]">Location</div>
                      <div className="text-sm font-medium text-[#38BDF8]">Peshawar, PK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-5 text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m a <span className="text-[#F3F4F6] font-semibold">Computer Systems Engineering student at UET Peshawar</span>, focused on building software that combines AI capabilities with practical engineering.
            </p>
            <p>
              My work spans AI applications — from <span className="text-[#F3F4F6] font-medium">LLM-powered chatbots and retrieval-augmented systems</span> to machine learning experiments — alongside <span className="text-[#F3F4F6] font-medium">full-stack web development</span> with React, Next.js, and Express.js backends.
            </p>
            <p>
              I&apos;m currently conducting research on an <span className="text-[#38BDF8] font-medium">AI-assisted flood early-warning system</span> for the Nowshera/Kabul River region, exploring how hydrological data and machine learning can support disaster preparedness.
            </p>
            <p>
              Beyond individual projects, I serve as <span className="text-[#F3F4F6] font-medium">Lead AI at the Computer Cell Society</span> and am involved in research at <span className="text-[#F3F4F6] font-medium">SID Lab, UET Peshawar</span>.
            </p>

            {/* Quick Core Competencies Chips */}
            <div className="pt-4 border-t border-[#1E293B] flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Agentic LLM Pipelines
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Production RAG Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Full-Stack Next.js & REST APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-[#151D2E] text-[#F3F4F6] border border-[#1E293B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Applied Hydrological ML
              </span>
            </div>
          </div>
        </div>

        {/* Education Highlight Cards Section */}
        <div className="mt-16 pt-12 border-t border-[#1E293B]">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-[#38BDF8]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">
              Academic & Education Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Degree Card */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 hover:border-[#38BDF8]/40 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#151D2E] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-semibold tracking-wider text-[#9CA3AF] mb-1">
                  Program & Degree
                </div>
                <h4 className="text-base font-bold text-[#F3F4F6] leading-snug">
                  {education.degree}
                </h4>
              </div>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                {education.status || 'Final-Year Student (2023 – 2027)'}
              </p>
            </div>

            {/* University Card */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 hover:border-[#38BDF8]/40 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#151D2E] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-semibold tracking-wider text-[#9CA3AF] mb-1">
                  Institution
                </div>
                <h4 className="text-base font-bold text-[#F3F4F6] leading-snug">
                  {education.university}
                </h4>
              </div>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                Department of Computer Systems Engineering
              </p>
            </div>

            {/* CGPA Card */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 hover:border-[#38BDF8]/40 transition duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#151D2E] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-semibold tracking-wider text-[#9CA3AF] mb-1">
                  Cumulative Grade Point
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#38BDF8] tracking-tight">
                    {education.cgpa || '3.8/4.0'}
                  </span>
                  <span className="text-xs font-medium text-[#9CA3AF]">CGPA</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#9CA3AF]">
                Top academic standing across coursework
              </p>
            </div>

            {/* Class Topper Badge Card */}
            <div className="bg-[#111827] border-2 border-[#38BDF8]/50 rounded-xl p-5 shadow-lg shadow-[#38BDF8]/5 hover:border-[#38BDF8] transition duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#38BDF8]/20 rounded-full blur-md" />
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase font-semibold tracking-wider text-[#38BDF8] mb-1">
                  Academic Distinction
                </div>
                <h4 className="text-xl font-extrabold text-[#F3F4F6] flex items-center gap-2">
                  {education.distinction || topperAchievement?.title || 'Class Topper'}
                </h4>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#9CA3AF] pt-2 border-t border-[#1E293B]">
                <span>Matric: {education.matriculation}</span>
                <span>ETEA: {education.etea}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
