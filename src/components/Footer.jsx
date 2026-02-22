import React from 'react';
import { Twitter, Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Platform',
    links: [
      { name: 'VitaSense IoT', href: '#' },
      { name: 'VitaAI Clinical', href: '#' },
      { name: 'VitaChain Ledger', href: '#' },
      { name: 'Clinical Portal', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Clinical Research', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Developer API', href: '#' },
      { name: 'Security & Trust', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Newsroom', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-black tracking-tighter text-primary mb-8 block">
              VITA<span className="text-white">LINK</span>
            </a>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-[340px] font-medium">
              The infrastructure for sovereign health. Connecting patients and clinicians via continuous, secure intelligence.
            </p>
            <div className="flex gap-6">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 hover:bg-white/10 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/20 mb-8">{group.title}</h4>
              <ul className="space-y-4 list-none">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
                      {link.name}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-30 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
              <MapPin size={14} className="text-primary/50" />
              Palo Alto, CA & NYC
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
              <Mail size={14} className="text-primary/50" />
              hello@vitalink.ai
            </div>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-white/30 text-xs font-bold uppercase tracking-widest hover:text-white">Privacy</a>
            <a href="#" className="text-white/30 text-xs font-bold uppercase tracking-widest hover:text-white">HIPAA Compliance</a>
            <a href="#" className="text-white/30 text-xs font-bold uppercase tracking-widest hover:text-white">Terms</a>
          </div>

          <div className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2024 Vitalink Health. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
