import React from 'react';
import { Sun, Moon, Info } from 'lucide-react';

export default function Header({ theme, toggleTheme, onOpenAbout, onGoHome }) {
  return (
    <header className="site-header">
      <div className="header-top">
        <a href="#/" onClick={(e) => { e.preventDefault(); onGoHome(); }} className="site-brand">
          <h1 className="brand-title">
            Shiwani <span className="brand-subtitle">/ Notes</span>
          </h1>
        </a>

        <div className="header-actions">
          <button 
            onClick={onOpenAbout} 
            className="action-btn"
            title="About this space"
            aria-label="About this journal"
          >
            <Info size={14} />
            <span>About</span>
          </button>

          <button 
            onClick={toggleTheme} 
            className="action-btn theme-toggle-btn"
            title={`Switch to ${theme === 'light' ? 'Obsidian Dark' : 'Warm Paper'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>
      </div>

      <p className="header-bio">
        A quiet collection of everyday observations, field notes, curiosities noticed, and thoughts that didn't need to be professional.
      </p>
    </header>
  );
}
