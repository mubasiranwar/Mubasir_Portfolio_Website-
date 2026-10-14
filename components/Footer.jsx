import { personalInfo, socialLinks } from '@/data/portfolio';
import {
  Github,
  Linkedin,
  BarChart3,
  Video,
  Facebook,
  ExternalLink,
} from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  BarChart3,
  Video,
  Facebook,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E293B] bg-[#0A0F1E] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name & Subtitle */}
        <div className="text-center md:text-left">
          <a
            href="#"
            className="text-lg font-bold text-[#F3F4F6] hover:text-[#38BDF8] transition-colors"
          >
            {personalInfo.name}
          </a>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
            {personalInfo.title}
          </p>
        </div>

        {/* Social Links Row (Icons only) */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const IconComponent = iconMap[social.icon] || ExternalLink;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 hover:bg-[#151D2E] transition-all duration-200"
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Closing Line & Copyright */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-xs text-[#9CA3AF]">
            Building AI-powered solutions and full-stack applications.
          </p>
          <p className="text-xs text-[#9CA3AF]/60 font-mono">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
