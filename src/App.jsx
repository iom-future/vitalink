import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const PatientsPage = lazy(() => import('./pages/PatientsPage'));
const CliniciansPage = lazy(() => import('./pages/CliniciansPage'));
const HospitalsPage = lazy(() => import('./pages/HospitalsPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <HashRouter basename="/vitalink">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout bannerVisible={bannerVisible} onBannerClose={() => setBannerVisible(false)} />}>
            <Route index element={<Home bannerVisible={bannerVisible} />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="for-patients" element={<PatientsPage />} />
            <Route path="for-clinicians" element={<CliniciansPage />} />
            <Route path="for-hospitals" element={<HospitalsPage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="pricing" element={<PricingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;