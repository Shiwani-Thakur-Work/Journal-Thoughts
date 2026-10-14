import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div 
        className="about-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          aria-label="Close about dialog"
        >
          <X size={17} />
        </button>

        <h2 id="about-modal-title" className="modal-title">
          About this Space
        </h2>

        <div className="modal-content">
          <p>
            Welcome to my personal <strong>Journal of Thoughts</strong>.
          </p>

          <p>
            This website is an intentional counter-balance to the modern internet: no algorithmic feeds, no engagement bait, no newsletters, and no tracking scripts. Just an open, quiet notebook where I write down observations, curious details noticed during the day, fragments of thought, or quotes that made me stop.
          </p>

          <p>
            The content is divided into three lightweight rhythms:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li><strong>Noticed:</strong> Field notes and micro-observations about people, physical textures, and everyday environments.</li>
            <li><strong>Musings:</strong> Short mental sparks on habits, momentum, focus, and everyday philosophy.</li>
            <li><strong>Liked:</strong> Curated lines from books, essays, design artifacts, and music encountered in the wild.</li>
          </ul>

          <p>
            Built with pure HTML, Vanilla CSS, and React. Deployed directly to <strong>GitHub Pages</strong> with zero third-party platforms.
          </p>

          <div className="modal-links">
            <a 
              href="https://github.com/Shiwani-Thakur-Work/Journal-Thoughts" 
              target="_blank" 
              rel="noreferrer" 
              className="modal-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub Repository</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
