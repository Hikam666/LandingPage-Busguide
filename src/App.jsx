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
    </>
  );
}

export default App;
