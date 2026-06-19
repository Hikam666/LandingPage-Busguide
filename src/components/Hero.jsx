import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Users, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '6rem'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
          >
            <h1 className="hero-headline" style={{ marginBottom: '1.5rem', color: '#fff', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
              Rute Bus Kota dalam Genggaman Tangan
            </h1>
            
            <p style={{ 
              color: '#E2E8F0', 
              fontSize: '1.25rem', 
              marginBottom: '3rem', 
              maxWidth: '650px', 
              lineHeight: 1.7,
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              textAlign: 'center',
              marginInline: 'auto'
            }}>
              Jangan pernah tersesat naik bus lagi. Lacak, rencanakan, dan nikmati perjalanan cerdas dengan informasi halte dan estimasi waktu real-time.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', width: '100%' }}>
              
              {/* CTA Button */}
              <div className="cta-wrapper" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <a href="/file_aplikasi/app-release.apk" download className="btn btn-glow cta-hero" style={{ padding: '1.2rem 3.5rem', borderRadius: '100px', fontSize: '1.2rem' }}>
                  <Download size={24} />
                  Download Gratis
                </a>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.5)',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('fitur').scrollIntoView({ behavior: 'smooth' })}
        >
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginRight: '-2px' }}>Scroll</span>
          <ChevronDown size={24} color="var(--primary)" />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-headline { font-size: 28px !important; line-height: 1.3 !important; }
          .cta-wrapper { padding: 0 1rem; }
          .cta-hero { width: 100%; justify-content: center; }
          .social-proof-box { flex-direction: column; gap: 1rem !important; border-radius: 20px !important; padding: 1.5rem !important; width: 90%; }
        }
      `}</style>
    </section>
  );
}
