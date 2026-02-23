import React from 'react';
import SocialProof from '../components/SocialProof';

export default function ResearchPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-8">Clinical Research & Evidence</h1>
        <p className="text-xl text-text-muted mb-12">
          Vitalink is backed by rigorous clinical studies and real-world validation.
        </p>
      </div>
      <SocialProof />
    </div>
  );
}
