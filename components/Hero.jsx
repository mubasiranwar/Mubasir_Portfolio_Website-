'use client';

import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Cpu, Award } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

// SVG icon for Kaggle
function KaggleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.825 23.859c-.022.092-.117.141-.283.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.181c0 .205-.094.341-.282.341H5.437c-.188 0-.282-.136-.282-.341V.341C5.155.136 5.249 0 5.437 0h2.566c.188 0 .282.136.282.341v14.053l6.398-6.527c.14-.144.305-.216.492-.216h3.284c.141 0 .235.048.283.144.047.119.023.214-.07.288l-6.721 6.643 7.025 8.847c.07.094.082.188.029.288z" />
    </svg>
  );
}

export default function Hero() {
  // Find primary requested social profiles
  const findSocial = (platformName) =>
    socialLinks?.find(
      (link) => link.name.toLowerCase() === platformName.toLowerCase()
    );

  const github = findSocial('github') || { url: 'https://github.com/mubasiranwar' };
  const linkedin = findSocial('linkedin') || { url: 'https://www.linkedin.com/in/mubasir-anwar-013628316/' };
  const kaggle = findSocial('kaggle') || { url: 'https://www.kaggle.com/mubasiranwar' };

  // Smooth scroll handler for anchor links
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:py-32 overflow-hidden bg-[#0A0F1E]"
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#38BDF8]/5 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text & CTAs): Stacked first on mobile, 7 cols on desktop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small accent badge with glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
              </span>
              <span>Full-Stack AI Engineer</span>
            </div>

            {/* Main Headline: Two distinct lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F4F6] leading-[1.1] mb-6">
              <span className="block">Building AI-Powered</span>
              <span className="block text-[#38BDF8]">Applications & Systems</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed mb-8">
              Computer Systems Engineering student at UET Peshawar, working across AI applications, web engineering, and applied research. I turn technical ideas into useful software products.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#38BDF8] text-[#0A0F1E] hover:bg-[#38BDF8]/90 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-[#0A0F1E]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <span>Contact Me</span>
              </a>

              {/* Download CV Link (if cvLink exists) */}
              {personalInfo?.cvLink && (
                <a
                  href={personalInfo.cvLink}
                  download="Mubasir_Anwar_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-[#F3F4F6] bg-[#151D2E] border border-[#1E293B] hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  aria-label="Download Mubasir Anwar Curriculum Vitae (PDF)"
                >
                  <Download className="w-4 h-4 text-[#38BDF8]" />
                  <span>Download CV</span>
                </a>
              )}
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1E293B] w-full max-w-lg">
              <span className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                {github && (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mubasir Anwar GitHub profile"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#151D2E] border border-[#1E293B] text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#151D2E]/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}

                {/* LinkedIn */}
                {linkedin && (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mubasir Anwar LinkedIn profile"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#151D2E] border border-[#1E293B] text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#151D2E]/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}

                {/* Kaggle */}
                {kaggle && (
                  <a
                    href={kaggle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mubasir Anwar Kaggle profile"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#151D2E] border border-[#1E293B] text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#151D2E]/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  >
                    <KaggleIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Profile Photo & Minimal Composition) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              
              {/* Subtle blue accent glow behind photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 bg-gradient-to-tr from-[#38BDF8]/20 via-[#38BDF8]/10 to-transparent rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500"
              />

              {/* Styled Photo Frame Container */}
              <div className="relative rounded-2xl bg-[#111827] border border-[#1E293B] ring-1 ring-[#38BDF8]/25 p-2.5 overflow-hidden shadow-2xl">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#151D2E]">
                  <Image
                    src={personalInfo?.profileImage || '/images/profile.jpg'}
                    alt={`${personalInfo?.name || 'Mubasir Anwar'} - ${personalInfo?.title || 'Full-Stack AI Engineer'}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle dark vignette at bottom for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating tech badge 1: Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#151D2E]/95 backdrop-blur-md border border-[#1E293B] rounded-xl px-3.5 py-2 shadow-xl items-center gap-2.5 ring-1 ring-[#38BDF8]/20">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F3F4F6]">AI & Systems</div>
                  <div className="text-[10px] text-[#9CA3AF]">Next.js • LLMs • IoT</div>
                </div>
              </div>

              {/* Floating tech badge 2: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#151D2E]/95 backdrop-blur-md border border-[#1E293B] rounded-xl px-3.5 py-2 shadow-xl items-center gap-2.5 ring-1 ring-[#38BDF8]/20">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F3F4F6]">Class Topper</div>
                  <div className="text-[10px] text-[#38BDF8] font-medium">3.8 CGPA • UET Peshawar</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
