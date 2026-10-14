import React from 'react';
import { Sun, Moon, Info } from 'lucide-react';

export default function Header({ theme, toggleTheme, onOpenAbout, onGoHome }) {
  return (
    <header className="site-header">
      <div className="header-top">
        <a href="#/" onClick={(e) => { e.preventDefault(); onGoHome(); }} className="site-brand">
          <div className="brand-monogram">J</div>
          <h1 className="brand-title">Journal of Thoughts</h1>
        </a>

        <div className="header-actions">
          <button 
            onClick={onOpenAbout} 
            className="action-btn"
            title="About this journal"
            aria-label="About this journal"
          >
            <Info size={15} />
            <span>About</span>
          </button>

          <button 
            onClick={toggleTheme} 
            className="action-btn theme-toggle-btn"
            title={`Switch to ${theme === 'light' ? 'Obsidian Dark' : 'Warm Paper'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>

      <p className="header-bio">
        A quiet, distraction-free archive for everyday observations, casual reflections, things noticed, and small ideas collected in the wild.
      </p>

      <div className="header-meta">
        <span className="live-indicator">
          <span className="pulse-dot"></span>
          <span>Writing casually</span>
        </span>
        <span>•</span>
        <span>Hosted directly on GitHub Pages</span>
      </div>
    </header>
  );
}
