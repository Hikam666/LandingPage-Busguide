import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, MousePointerClick, Volume2, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: <User size={48} />, title: 'Login / Daftar', desc: 'Masuk dengan email atau akun Anda.' },
  { icon: <MapPin size={48} />, title: 'Pilih Lokasi', desc: 'Deteksi otomatis untuk mencari rute terbaik.' },
  { icon: <MousePointerClick size={48} />, title: 'Pilih Rute', desc: 'Temukan bus dan lihat estimasi waktu tiba.' },
  { icon: <Volume2 size={48} />, title: 'Notifikasi', desc: 'Dapatkan pengingat sebelum sampai tujuan.' },
  { icon: <CheckCircle2 size={48} />, title: 'Sampai', desc: 'Perjalanan aman bebas khawatir.' },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="content-section" style={{ backgroundColor: 'rgba(26, 35, 50, 0.3)' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cara <span style={{ color: 'var(--primary)' }}>Kerja</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sangat mudah untuk memulai perjalanan cerdas Anda bersama BusGuide.
          </motion.p>
        </div>

        <div className="steps-wrapper" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: '24px',
          position: 'relative'
        }}>
          {/* Connecting Line (Solid 2px Orange) */}
          <div className="connecting-line" style={{
            position: 'absolute',
            top: '50px', left: '10%', right: '10%',
            height: '2px',
            background: 'var(--primary)',
            zIndex: 1
          }}></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="step-card"
            >
              <div className="step-icon-container">
                {step.icon}
                <div className="step-number">{idx + 1}</div>
              </div>
              <div className="step-text-container">
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .step-card {
          flex: 1;
          min-width: 160px;
          text-align: center;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }
        
        .step-icon-container {
          width: 100px;
          height: 100px;
          background: var(--bg-card);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--primary);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          border: 2px solid rgba(255,255,255,0.08);
          position: relative;
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        
        .step-number {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 28px;
          height: 28px;
          background: var(--primary);
          color: #000;
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .step-card:hover .step-icon-container {
          transform: scale(1.1);
          border-color: var(--primary) !important;
          background: var(--primary) !important;
          color: #000 !important;
        }

        @media (max-width: 992px) {
          .connecting-line { display: none !important; }
          .steps-wrapper { 
            flex-direction: column; 
            align-items: stretch; 
            gap: 16px !important; 
          }
          .step-card { 
            flex-direction: row; 
            align-items: center; 
            text-align: left; 
            background: rgba(255, 255, 255, 0.02);
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            width: 100%;
          }
          .step-icon-container {
            margin: 0 1.5rem 0 0 !important;
            width: 64px !important;
            height: 64px !important;
            flex-shrink: 0;
          }
          .step-icon-container svg {
            width: 32px !important;
            height: 32px !important;
          }
          .step-number {
            width: 24px;
            height: 24px;
            font-size: 0.8rem;
            top: -2px;
            right: -2px;
          }
          .step-text-container p {
            max-width: none !important;
          }
        }
      `}</style>
    </section>
  );
}
