import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.</p>
        <ul className="footer-links">
          <li><a href="/about">Hakkımızda</a></li>
          <li><a href="/contact">İletişim</a></li>
          <li><a href="/privacy">Gizlilik Politikası</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;