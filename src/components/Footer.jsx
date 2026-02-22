import React from 'react';

const FOOTER_LINKS = [
  {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'VitaSense IoT', href: '#' },
      { label: 'VitaAI Engine', href: '#' },
      { label: 'VitaChain Ledger', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Patients', href: '#problem' },
      { label: 'For Clinicians', href: '#features' },
      { label: 'For Hospitals', href: '#' },
      { label: 'Research Marketplace', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Clinical Evidence', href: '#' },
      { label: 'HIPAA & Security', href: '#' },
      { label: 'Developer API', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/50 py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <a href="#" className="inline-block text-2xl font-black text-primary tracking-wide mb-6">
            VITALINK
          </a>
          <p className="footer-tagline mx-auto lg:mx-0 max-w-[500px] text-lg text-white/40 italic leading-relaxed">
            "Closing the gap between your body and your care team — every second of every day."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-accent transition-colors duration-300 text-[15px]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pt-16 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-white/30 text-xs font-bold uppercase tracking-wider mb-2">General Inquiries</span>
            <a href="mailto:hello@vitalink.io" className="text-white/70 hover:text-accent transition-colors">hello@vitalink.io</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/30 text-xs font-bold uppercase tracking-wider mb-2">Clinical Support</span>
            <a href="mailto:clinical@vitalink.io" className="text-white/70 hover:text-accent transition-colors">clinical@vitalink.io</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white/30 text-xs font-bold uppercase tracking-wider mb-2">Headquarters</span>
            <p className="text-white/70">+1 (650) 000-VITA | Boston, MA</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white/30 text-xs font-bold uppercase tracking-wider mb-1">Stay Connected</span>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'YouTube', 'PubMed'].map(s => (
                <a key={s} href="#" className="text-white/60 hover:text-accent font-bold text-sm transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Vitalink Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Privacy Policy', 'Terms of Service', 'HIPAA Notice', 'Cookie Settings'].map(l => (
              <a key={l} href="#" className="text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
