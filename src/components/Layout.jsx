import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ bannerVisible, onBannerClose }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-lg focus:shadow-lg focus:font-bold"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar bannerVisible={bannerVisible} onBannerClose={onBannerClose} />
      <main id="main-content" className='bg-[#FAFAFA]' tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
