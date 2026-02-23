import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ bannerVisible, onBannerClose }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ScrollToTop />
      <Navbar bannerVisible={bannerVisible} onBannerClose={onBannerClose} />
      <main className='bg-[#FAFAFA]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
