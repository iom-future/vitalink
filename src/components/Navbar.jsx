import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Banner from './Banner';

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Patients', href: '#problem' },
  { label: 'For Clinicians', href: '#features' },
  { label: 'For Hospitals', href: '#social-proof' },
  { label: 'Research', href: '#social-proof' },
  { label: 'Pricing', href: '#cta' },
];

export default function Navbar({ bannerVisible, onBannerClose }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500  ">
      {!scrolled && bannerVisible && <Banner onClose={onBannerClose} />}
      <nav
        className={`transition-all duration-500 py-3 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-clinical  py-1'
            : 'bg-white'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between ">
          {/* Logo */}
          <a href="#" className={`text-2xl font-black tracking-tight transition-colors duration-500 ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
            VITA<span className="text-primary">LINK</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-8 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    scrolled ? 'text-secondary/70 hover:text-primary' : 'text-secondary/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#cta" className={`btn-primary px-6! py-2.5! text-sm! ${scrolled ? '' : ''}`}>
              Start Free Trial
            </a>
            <a href="#cta" className={`btn-outline-dark px-6! py-2.5! text-sm! ${scrolled ? 'border-secondary/20! text-secondary! hover:bg-secondary! hover:text-white!' : ''}`}>
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden bg-transparent border-none cursor-pointer transition-colors ${scrolled ? 'text-secondary' : 'text-secondary'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-secondary/5 px-6 pb-10 shadow-2xl animate-[fadeUp_0.4s_ease-out]">
            <ul className="list-none flex flex-col gap-1 mb-8 pt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-secondary/70 text-base font-semibold border-b border-secondary/5 flex items-center justify-between"
                  >
                    {link.label}
                    <ArrowRight size={16} className="text-primary/40" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-primary justify-center w-full">
                Start Free Trial
              </a>
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-outline-dark justify-center w-full">
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
