import React from 'react';

export default function Banner({ onClose }) {

  return (
    <div className="bg-primary text-white text-center py-2.5 px-6 text-sm font-medium relative z-50">
      <span>
        Vitalink is now HIPAA-certified and live in 14 US states. Join 200+ clinicians in early access →{' '}
        <a href="#cta" className="text-accent font-bold underline hover:text-white transition-colors">
          Apply Now
        </a>
      </span>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-lg cursor-pointer"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  );
}
