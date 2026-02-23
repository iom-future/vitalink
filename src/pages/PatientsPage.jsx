import React from 'react';
import Problem from '../components/Problem';
import Stats from '../components/Stats';

export default function PatientsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Problem />
      <Stats />
    </div>
  );
}
