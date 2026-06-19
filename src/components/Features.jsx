import React from 'react';
import { motion } from 'framer-motion';
import { Map, Bell, MapPin, Camera, BusFront, History } from 'lucide-react';

const features = [
  {
    icon: <Map size={28} />,
    title: 'Navigasi Rute',
    desc: 'Temukan rute bus terbaik dari lokasi awal ke tujuan dengan peta interaktif real-time.'
  },
  {
    icon: <Bell size={28} />,
    title: 'Notifikasi Halte',
    desc: 'Dapatkan notifikasi otomatis saat bus mendekati halte tujuan. Lebih aman dan nyaman.'
  },
  {
    icon: <MapPin size={28} />,
    title: 'Halte Terdekat',
    desc: 'Temukan halte atau terminal bus terdekat dari lokasi Anda dalam hitungan detik.'
  },
  {
    icon: <Camera size={28} />,
    title: 'Rekomendasi Wisata',
    desc: 'Jelajahi destinasi wisata menarik yang dapat dijangkau langsung menggunakan bus.'
  },
  {
    icon: <BusFront size={28} />,
    title: 'Rekomendasi PO Bus',
    desc: 'Dapatkan informasi PO bus beserta fasilitas, rating, dan ketersediaan rute.'
  },
  {
    icon: <History size={28} />,
    title: 'Riwayat Perjalanan',
    desc: 'Lihat riwayat perjalanan Anda untuk memudahkan perencanaan rute selanjutnya.'
  }
];

export default function Features() {
  return (
    <section id="fitur" className="content-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Fitur <span style={{ color: 'var(--primary)' }}>Utama</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Semua yang Anda butuhkan untuk perjalanan bus yang sempurna, langsung di genggaman Anda.
          </motion.p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="feature-card"
              style={{
                background: 'var(--bg-card)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div 
                className="icon-box"
                style={{
                  width: '64px', height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'all 0.4s ease'
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
