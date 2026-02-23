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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500  ">
      {!scrolled && bannerVisible && <Banner onClose={onBannerClose} />}
      <nav
        className={`transition-all duration-500 py-4 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-clinical py-2'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between ">
          {/* Logo */}
          <a href="#" className={`text-2xl font-black tracking-tight transition-colors duration-500 text-secondary uppercase`}>
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
            <a href="#cta" className={`btn-primary px-6! py-3! text-sm! font-bold`}>
              Start Free Trial
            </a>
            <a href="#cta" className={`btn-outline-dark px-6! py-3! text-sm! font-bold ${scrolled ? 'border-secondary/20! text-secondary! hover:bg-secondary! hover:text-white!' : ''}`}>
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

      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to ensure full-screen coverage */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-white lg:hidden flex flex-col animate-[fadeUp_0.3s_ease-out]">
          {/* Header inside overlay to have a close button */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-secondary/5">
            <a href="#" onClick={() => setMobileOpen(false)} className="text-2xl font-black tracking-tight text-secondary uppercase">
              VITA<span className="text-primary">LINK</span>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="bg-transparent border-none cursor-pointer text-secondary p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="grow overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <ul className="list-none flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-secondary/70 text-lg font-semibold border-b border-secondary/5 flex items-center justify-between"
                  >
                    {link.label}
                    <ArrowRight size={18} className="text-primary/40" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 pt-8 pb-10 mt-auto">
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-primary justify-center w-full py-4 text-base">
                Start Free Trial
              </a>
              <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-outline-dark justify-center w-full py-4 text-base">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
