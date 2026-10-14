'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Smooth scroll handler with offset for sticky navbar
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

      setActiveSection(targetId);
      // Update browser URL hash without jump
      window.history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      hamburgerButtonRef.current?.focus();
    }
  };

  // Active section tracking via IntersectionObserver and scroll listener
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact'];
    
    // Intersection Observer for detecting visible section
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // Scroll listener for sticky styles and top-of-page fallback
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Manage focus and body scroll when mobile menu opens / closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Move focus inside the drawer for keyboard accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        hamburgerButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0F1E]/90 backdrop-blur-xl border-b border-[#1E293B] shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
            : 'bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-[#1E293B]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3.5">
            {/* Logo / Monogram */}
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-xl transition-all"
              aria-label="Mubasir Anwar Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151D2E] border border-[#1E293B] group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all">
                <span className="text-[#38BDF8] font-mono font-extrabold text-base tracking-wider">
                  MA
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-sm leading-tight text-[#F3F4F6] group-hover:text-[#38BDF8] transition-colors">
                  Mubasir Anwar
                </span>
                <span className="text-[11px] text-[#9CA3AF] leading-tight">
                  Full-Stack AI Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              role="navigation"
              aria-label="Desktop Navigation"
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
                      isActive
                        ? 'text-[#38BDF8] font-semibold bg-[#38BDF8]/10'
                        : 'text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#151D2E]/50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#38BDF8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Desktop "Let's Talk" CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-2 bg-[#38BDF8] text-[#0A0F1E] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#38BDF8]/90 transition-all duration-200 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-[#0A0F1E]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                ref={hamburgerButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#9CA3AF] hover:text-[#F3F4F6] bg-[#151D2E] border border-[#1E293B] hover:border-[#38BDF8]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Slide-in Panel */}
      <aside
        id="mobile-navigation"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#111827] border-l border-[#1E293B] shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Mobile Header: Logo and Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1E293B]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#151D2E] border border-[#1E293B]">
                <span className="text-[#38BDF8] font-mono font-bold text-sm">MA</span>
              </div>
              <span className="text-[#F3F4F6] font-semibold text-sm">Navigation</span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                hamburgerButtonRef.current?.focus();
              }}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-[#9CA3AF] hover:text-[#F3F4F6] bg-[#151D2E] border border-[#1E293B] hover:border-[#38BDF8]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav role="navigation" aria-label="Mobile Navigation Links" className="mt-6 flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-[#38BDF8] bg-[#38BDF8]/10 font-semibold border-l-2 border-[#38BDF8]'
                      : 'text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#151D2E]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer CTA */}
        <div className="pt-6 border-t border-[#1E293B]">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 bg-[#38BDF8] text-[#0A0F1E] font-semibold text-base py-3 px-4 rounded-xl hover:bg-[#38BDF8]/90 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
}
