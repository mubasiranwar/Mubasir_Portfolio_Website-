'use client';

import { useState } from 'react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import {
  Mail,
  Linkedin,
  Github,
  BarChart3,
  Video,
  Facebook,
  ExternalLink,
  MessageSquare,
  Copy,
  Check,
  Send,
  User,
  MessageCircle,
} from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  BarChart3,
  Video,
  Facebook,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const linkedinUrl =
    socialLinks.find((s) => s.name.toLowerCase() === 'linkedin')?.url ||
    'https://www.linkedin.com/in/mubasir-anwar-013628316/';
  const githubUrl =
    socialLinks.find((s) => s.name.toLowerCase() === 'github')?.url ||
    'https://github.com/mubasiranwar';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepares direct mailto link with encoded subject and body to guarantee delivery without fake backend claims
    const subjectEncoded = encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open client email software
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#111827] border-y border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151D2E] border border-[#1E293B] text-xs font-medium text-[#38BDF8] mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F3F4F6] tracking-tight mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF]">
            Have an AI idea, a software challenge, or a research opportunity? Leave a message below or reach out directly.
          </p>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-[#151D2E] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-[#F3F4F6] flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#38BDF8] rounded-full inline-block"></span>
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Compose your message to {personalInfo.email}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8]">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111827] border border-[#1E293B] text-[#F3F4F6] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111827] border border-[#1E293B] text-[#F3F4F6] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. AI Automation Project / Research Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111827] border border-[#1E293B] text-[#F3F4F6] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, question, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1E293B] text-[#F3F4F6] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#38BDF8] text-[#0A0F1E] font-semibold text-sm hover:bg-[#0ea5e9] active:scale-[0.99] transition-all shadow-lg shadow-[#38BDF8]/10 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>
              </div>

              {submitStatus === 'sent' && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client has been prepared with your message to mubasiranwar70@gmail.com!</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Direct Info & Social Profiles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#38BDF8] rounded-full inline-block"></span>
              Direct Inquiries
            </h3>

            {/* Email Card */}
            <div className="bg-[#151D2E] border border-[#1E293B] rounded-xl p-5 hover:border-[#38BDF8]/60 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-[#F3F4F6] font-medium text-base hover:text-[#38BDF8] transition-colors truncate mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                    <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Primary communication channel
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg bg-[#111827] border border-[#1E293B] text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-[#38BDF8] text-[#0A0F1E] hover:bg-[#0ea5e9] transition-colors"
                    title="Send email"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#151D2E] border border-[#1E293B] hover:border-[#38BDF8]/60 transition-all duration-300 block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/10 group-hover:scale-105 transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                    Professional Network
                  </span>
                  <div className="text-sm font-semibold text-[#F3F4F6] group-hover:text-[#38BDF8] transition-colors truncate">
                    Connect on LinkedIn
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#151D2E] border border-[#1E293B] hover:border-[#38BDF8]/60 transition-all duration-300 block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/10 group-hover:scale-105 transition-all">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                    Code Repositories
                  </span>
                  <div className="text-sm font-semibold text-[#F3F4F6] group-hover:text-[#38BDF8] transition-colors truncate">
                    Explore on GitHub
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Social Grid (Kaggle, TikTok, Facebook) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {socialLinks
                .filter((s) => !['github', 'linkedin'].includes(s.name.toLowerCase()))
                .map((social) => {
                  const IconComponent = iconMap[social.icon] || ExternalLink;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#151D2E] border border-[#1E293B] rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-[#38BDF8]/70 hover:bg-[#151D2E]/80 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:bg-[#38BDF8]/10 transition-all mb-1.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-[#F3F4F6] group-hover:text-[#38BDF8] transition-colors">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
