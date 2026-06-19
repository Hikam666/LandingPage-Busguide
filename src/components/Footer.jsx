import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#070a12', 
      paddingTop: '60px', 
      paddingBottom: '40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      color: 'var(--text-muted)',
      fontSize: '14px'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '3rem' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 600, fontSize: '1.5rem', marginBottom: '1.25rem' }}>
              <img src="/logo.png" alt="BusGuide Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
              BusGuide
            </div>
            <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Aplikasi navigasi transportasi berbasis mobile yang membantu merencanakan perjalanan bus Anda dengan cerdas dan efisien.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Tautan Cepat</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="footer-link">Beranda</a></li>
              <li><a href="#fitur" className="footer-link">Fitur Utama</a></li>
              <li><a href="#cara-kerja" className="footer-link">Cara Kerja</a></li>
              <li><a href="#keunggulan" className="footer-link">Keunggulan</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Hubungi Kami</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={16} style={{ marginTop: '3px', color: 'var(--primary)' }} />
                <span>support@busguide.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={16} style={{ marginTop: '3px', color: 'var(--primary)' }} />
                <span>+62 812 3456 7890</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} style={{ marginTop: '3px', color: 'var(--primary)' }} />
                <span>Politeknik Negeri Malang,<br/>Jawa Timur, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separated Copyright */}
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '30px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <p>&copy; {new Date().getFullYear()} BusGuide. All rights reserved.</p>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>Dikembangkan oleh Kelompok 4 SIB 2A</p>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        .social-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .social-icon:hover {
          background: var(--primary);
          color: #000;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}
