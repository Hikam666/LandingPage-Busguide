import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Download } from 'lucide-react';

function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (e.g. 500px)
      if (window.scrollY > 500) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="app-frame">
        <Navbar />
        <Hero />
      </div>
      
      {/* Other sections below the frame */}
      <main style={{ marginTop: '-40px' }}> {/* Reduce gap between hero and features slightly */}
        <Features />
        <div className="section-divider yellow"></div>
        <HowItWorks />
        <div className="section-divider"></div>
        <Benefits />
      </main>
      <Footer />

      {/* Sticky Bottom CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.a
            href="/file_aplikasi/app-release.apk"
            download
            className="sticky-cta"
            initial={{ y: 100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: 100, opacity: 0, x: '-50%' }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={20} />
            Download Sekarang
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
