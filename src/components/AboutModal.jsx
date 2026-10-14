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
          About Daybook
        </h2>

        <div className="modal-content">
          <p>
            Welcome to my personal <strong>Daybook</strong>.
          </p>

          <p>
            This space is an intentional, quiet corner of the internet. It is not a polished portfolio or a corporate tech blog—just a place where I gather things I noticed during a walk, observations on people and design, fragments of overheard conversations, or ideas that sparked curiosity.
          </p>

          <p>
            I organize my thoughts into three lightweight rhythms:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
            <li><strong>Noticed:</strong> Field notes and small daily observations.</li>
            <li><strong>Musings:</strong> Reflections on habits, mindset, and everyday questions.</li>
            <li><strong>Liked:</strong> Quotes, books, artifacts, or music that stayed with me.</li>
          </ul>

          <p>
            No algorithms, no tracking, and no demands on your attention. Just a quiet reading room whenever you happen to wander by.
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
              <span>Source on GitHub</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
