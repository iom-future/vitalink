import React, { useState, useEffect } from 'react';
import Banner from './Banner';

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Patients', href: '#problem' },
  { label: 'For Clinicians', href: '#features' },
  { label: 'For Hospitals', href: '#social-proof' },
  { label: 'Research', href: '#social-proof' },
  { label: 'Pricing', href: '#cta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-350">
      {!scrolled && <Banner />}
      <nav
        className={`transition-all duration-350 ${
          scrolled
            ? 'bg-secondary/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-black text-primary tracking-wide">
            VITALINK
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-7 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/75 text-sm font-medium hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex gap-3">
            <a href="#cta" className="btn-primary !px-5 !py-2.5 !text-sm">
              Start Free Trial
            </a>
            <a href="#cta" className="btn-outline !px-5 !py-2.5 !text-sm">
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-secondary/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6 animate-[fadeUp_0.3s_ease]">
            <ul className="list-none flex flex-col gap-1 mb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-white/70 text-base font-medium hover:text-accent transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-primary justify-center">
                Start Free Trial
              </a>
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-outline justify-center">
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
