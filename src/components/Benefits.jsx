import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Briefcase, Camera, Users } from 'lucide-react';

const benefits = [
  "Informasi real-time & akurat untuk seluruh rute.",
  "Desain intuitif yang sangat mudah digunakan.",
  "Antarmuka modern, bersih, dan responsif.",
  "Perjalanan lebih aman berkat fitur notifikasi canggih."
];

const audiences = [
  { icon: <GraduationCap size={20} />, label: "Pelajar / Mahasiswa" },
  { icon: <Briefcase size={20} />, label: "Pekerja Kantor" },
  { icon: <Camera size={20} />, label: "Wisatawan" },
  { icon: <Users size={20} />, label: "Masyarakat Umum" }
];

export default function Benefits() {
  return (
    <section id="keunggulan" className="content-section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="benefits-grid">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Keunggulan <span style={{ color: 'var(--primary)' }}>BusGuide</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2rem' }}>
              Mengapa Anda harus menjadikan BusGuide sebagai teman setia perjalanan harian Anda?
            </p>
            
            <ul style={{ listStyle: 'none' }}>
              {benefits.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', fontSize: '1.1rem' }}
                >
                  <CheckCircle2 size={24} color="var(--primary)" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: '3rem',
              color: '#fff',
              position: 'relative'
            }}
          >
            {/* Decor blob */}
            <div style={{
              position: 'absolute', top: '-50px', right: '-50px',
              width: '150px', height: '150px',
              background: 'var(--primary)',
              filter: 'blur(70px)', opacity: 0.3, borderRadius: '50%',
              zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Untuk Siapa?</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                {audiences.map((aud, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontWeight: 400
                  }}>
                    {aud.icon}
                    {aud.label}
                  </div>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', opacity: 0.7, fontSize: '1.1rem' }}>
                "Semua bisa bepergian dengan bus lebih mudah dan terarah bersama BusGuide!"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
