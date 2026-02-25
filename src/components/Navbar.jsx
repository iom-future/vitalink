import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Banner from './Banner';

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Patients', href: '/for-patients' },
  { label: 'For Clinicians', href: '/for-clinicians' },
  { label: 'For Hospitals', href: '/for-hospitals' },
  { label: 'Research', href: '/research' },
  { label: 'Pricing', href: '/pricing' },
];

function Navbar({ bannerVisible, onBannerClose }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
        aria-label="Main Navigation"
        className={`transition-all duration-500 py-4 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-clinical py-2'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between ">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/vitalink_logo.png" alt="Vitalink" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-2 list-none">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full border whitespace-nowrap ${
                      isActive 
                        ? 'bg-primary/10 text-primary border-primary/20' 
                        : 'text-secondary/70 hover:text-primary border-transparent hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/pricing" className={`btn-primary px-6! py-3! text-sm! font-bold`}>
              Start Free Trial
            </Link>
            <Link to="/pricing" className={`btn-outline-dark px-6! py-3! text-sm! font-bold ${scrolled ? 'border-secondary/20! text-secondary! hover:bg-secondary! hover:text-white!' : ''}`}>
              Book a Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden bg-transparent border-none cursor-pointer transition-colors ${scrolled ? 'text-secondary' : 'text-secondary'}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to ensure full-screen coverage */}
      {mobileOpen && (
        <div 
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menu"
          className="fixed inset-0 z-[999] bg-white lg:hidden flex flex-col animate-[fadeUp_0.3s_ease-out]"
        >
          {/* Header inside overlay to have a close button */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-secondary/5">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <img src="/vitalink_logo.png" alt="Vitalink" className="h-8 w-auto" />
            </Link>
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
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-4 px-4 text-lg font-semibold flex items-center justify-between rounded-xl transition-all ${
                        isActive 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'text-secondary/70 border-b border-secondary/5'
                      }`}
                    >
                      {link.label}
                      <ArrowRight size={18} className={isActive ? 'text-primary' : 'text-primary/40'} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-4 pt-8 pb-10 mt-auto">
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="btn-primary justify-center w-full py-4 text-base">
                Start Free Trial
              </Link>
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="btn-outline-dark justify-center w-full py-4 text-base">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Navbar);
