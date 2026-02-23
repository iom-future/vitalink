import React from 'react';
import { Twitter, Linkedin, Mail, MapPin, Youtube, Microscope, Phone } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Platform',
    links: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'For Patients', href: '#' },
      { name: 'For Clinicians', href: '#' },
      { name: 'For Hospitals', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Research', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Blog', href: '#' },
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
              Closing the gap between your body and your care team — every second of every day.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter / X' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
                { Icon: Microscope, href: '#', label: 'PubMed Research Profile' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 hover:bg-white/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/20 mb-8">{group.title}</h4>
              <ul className="space-y-4 list-none">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm font-bold tracking-tight">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/20 mb-8">Contact</h4>
            <ul className="space-y-4 text-xs font-bold text-white/40 uppercase tracking-widest">
              <li>
                <span className="text-white/20 block mb-1">General Inquiries</span>
                <a href="mailto:hello@vitalink.io" className="text-white/60 hover:text-primary transition-colors">hello@vitalink.io</a>
              </li>
              <li>
                <span className="text-white/20 block mb-1">Clinical Partnerships</span>
                <a href="mailto:clinical@vitalink.io" className="text-white/60 hover:text-primary transition-colors">clinical@vitalink.io</a>
              </li>
              <li>
                <span className="text-white/20 block mb-1">Investor Relations</span>
                <a href="mailto:investors@vitalink.io" className="text-white/60 hover:text-primary transition-colors">investors@vitalink.io</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-2 text-white/30 text-[0.6rem] font-black uppercase tracking-[0.2em]">
              <Phone size={12} className="text-primary/50" />
              +1 (650) 000-VITA
            </div>
            <div className="flex items-center gap-2 text-white/30 text-[0.6rem] font-black uppercase tracking-[0.2em]">
              <MapPin size={12} className="text-primary/50" />
              Headquarters: Boston, MA, USA
            </div>
          </div>

          <div className="text-white/20 text-[0.6rem] font-black uppercase tracking-[0.2em]">
            © 2026 Vitalink Inc. All rights reserved. 
            <span className="mx-4 text-white/5">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-4 text-white/5">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="mx-4 text-white/5">|</span>
            <a href="#" className="hover:text-white transition-colors">HIPAA Notice</a>
            <span className="mx-4 text-white/5">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
