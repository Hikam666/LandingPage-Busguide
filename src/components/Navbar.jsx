import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '1rem 0' : '2.5rem 0',
          background: scrolled ? 'rgba(2, 6, 23, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600, fontSize: '1.25rem', zIndex: 1001 }}>
            <img src="/logo.png" alt="BusGuide Logo" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            BusGuide
          </a>

          {/* Links (Hidden on small screens) */}
          <ul className="desktop-nav" style={{ 
            display: 'flex', gap: '3rem', listStyle: 'none', margin: 0, padding: 0,
            position: 'absolute', left: '50%', transform: 'translateX(-50%)'
          }}>
            <li><a href="#fitur" className="nav-link">Fitur</a></li>
            <li><a href="#cara-kerja" className="nav-link">Cara Kerja</a></li>
            <li><a href="#keunggulan" className="nav-link">Keunggulan</a></li>
          </ul>

          {/* CTA Desktop */}
          <a href="/file_aplikasi/app-release.apk" download className="btn btn-glow desktop-nav" style={{ padding: '0.6rem 1.5rem', borderRadius: '100px' }}>
            Download
          </a>

          {/* Hamburger Menu Icon */}
          <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', zIndex: 1001 }}>
            {mobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </div>

        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(2, 6, 23, 0.98)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <a href="#fitur" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Fitur Utama</a>
            <a href="#cara-kerja" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Cara Kerja</a>
            <a href="#keunggulan" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Keunggulan</a>
            
            <a href="/file_aplikasi/app-release.apk" download className="btn btn-glow" style={{ padding: '1rem 3rem', borderRadius: '100px', fontSize: '1.1rem', marginTop: '1rem' }} onClick={() => setMobileMenuOpen(false)}>
              Download Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
        }
        
        .mobile-link {
          font-size: 1.5rem;
          color: #fff;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
}
