import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ThoughtCard from './components/ThoughtCard';
import ThoughtReader from './components/ThoughtReader';
import AboutModal from './components/AboutModal';
import Footer from './components/Footer';
import { THOUGHTS } from './content/thoughts';

export default function App() {
  // Theme state: defaults to 'light' (Warm Paper), or user preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('journal_theme') || 'light';
  });

  // Active view: null for stream view, or thought object for reader mode
  const [activeThought, setActiveThought] = useState(null);

  // Filter & Search states
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const searchInputRef = useRef(null);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('journal_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // URL Hash Routing Support (e.g., #/thought/action-precedes-clarity)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/thought/')) {
        const slug = hash.replace('#/thought/', '');
        const matched = THOUGHTS.find(t => t.slug === slug);
        if (matched) {
          setActiveThought(matched);
        } else {
          setActiveThought(null);
        }
      } else {
        setActiveThought(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut listener ('/' to search, 'Escape' to go back/close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !activeThought && !isAboutOpen) {
        if (document.activeElement !== searchInputRef.current) {
          e.preventDefault();
          searchInputRef.current?.focus();
        }
      } else if (e.key === 'Escape') {
        if (activeThought) {
          handleBackToStream();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeThought, isAboutOpen]);

  // Open a thought in Reader Mode
  const handleOpenThought = (thought) => {
    setActiveThought(thought);
    window.location.hash = `#/thought/${thought.slug}`;
  };

  // Return to Stream View
  const handleBackToStream = () => {
    setActiveThought(null);
    window.location.hash = '#/';
  };

  // Filter and search logic
  const filteredThoughts = useMemo(() => {
    return THOUGHTS.filter((item) => {
      const matchesCategory = 
        activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inExcerpt = item.excerpt.toLowerCase().includes(q);
      const inContent = item.content.toLowerCase().includes(q);
      const inTags = item.tags && item.tags.some(t => t.toLowerCase().includes(q));

      return inTitle || inExcerpt || inContent || inTags;
    });
  }, [activeCategory, searchQuery]);

  // Group thoughts by year
  const groupedThoughts = useMemo(() => {
    const groups = {};
    filteredThoughts.forEach(thought => {
      const year = thought.year || '2026';
      if (!groups[year]) groups[year] = [];
      groups[year].push(thought);
    });
    return groups;
  }, [filteredThoughts]);

  return (
    <div className="app-container">
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAbout={() => setIsAboutOpen(true)}
        onGoHome={handleBackToStream}
      />

      <main>
        {activeThought ? (
          <ThoughtReader 
            thought={activeThought}
            onBack={handleBackToStream}
            allThoughts={THOUGHTS}
            onSelectThought={handleOpenThought}
          />
        ) : (
          <>
            <FilterBar 
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalCount={filteredThoughts.length}
              searchInputRef={searchInputRef}
            />

            {filteredThoughts.length === 0 ? (
              <div className="empty-state">
                <h3>No thoughts found</h3>
                <p>Try searching for a different keyword or resetting the filter category.</p>
              </div>
            ) : (
              <section className="timeline-stream" aria-label="Timeline of thoughts">
                {Object.keys(groupedThoughts).sort((a, b) => b - a).map(year => (
                  <div key={year} className="year-group">
                    <div className="year-divider">
                      <span className="year-label">{year}</span>
                      <div className="year-line"></div>
                    </div>

                    <div className="thoughts-list">
                      {groupedThoughts[year].map(thought => (
                        <ThoughtCard 
                          key={thought.id}
                          thought={thought}
                          onOpenThought={handleOpenThought}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}
          </>
        )}
      </main>

      <Footer onOpenAbout={() => setIsAboutOpen(true)} />

      <AboutModal 
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
