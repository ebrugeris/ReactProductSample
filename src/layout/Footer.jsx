import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.</p>
        <div className="footer-bar">
          <a href="/about">Hakkımızda</a>
          <a href="/contact">İletişim</a>
          <a href="/privacy">Gizlilik Politikası</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;