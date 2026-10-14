import React from 'react';

export default function Footer({ onOpenAbout }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div>
        <span>© {currentYear} Daybook.</span>
        <span style={{ marginLeft: '0.5rem', opacity: 0.65 }}>
          Penned by Shiwani.
        </span>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <button onClick={onOpenAbout}>About</button>
        <span>•</span>
        <button onClick={scrollToTop}>Back to Top ↑</button>
      </nav>
    </footer>
  );
}
