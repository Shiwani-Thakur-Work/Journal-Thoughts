import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Check, ArrowRight } from 'lucide-react';

export default function ThoughtReader({ 
  thought, 
  onBack, 
  allThoughts, 
  onSelectThought 
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [thought]);

  const currentIndex = allThoughts.findIndex(t => t.id === thought.id);
  const prevThought = currentIndex > 0 ? allThoughts[currentIndex - 1] : null;
  const nextThought = currentIndex < allThoughts.length - 1 ? allThoughts[currentIndex + 1] : null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#/thought/${thought.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="reader-wrapper">
      <nav className="reader-navigation">
        <button 
          onClick={onBack} 
          className="back-to-thoughts-btn"
          aria-label="Back to all thoughts"
        >
          <ArrowLeft size={15} />
          <span>Back to thoughts</span>
        </button>
      </nav>

      <article className="reader-article">
        <header className="reader-header">
          <div className="reader-meta-row">
            <span>{thought.date}</span>
            <span>•</span>
            <span className="category-tag">{thought.category}</span>
            <span>•</span>
            <span>{thought.readTime}</span>
          </div>

          <h1 className="reader-title">{thought.title}</h1>

          <div className="reader-tags">
            {thought.tags && thought.tags.map(tag => (
              <span key={tag} className="reader-tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* Content Body */}
        <div 
          className="reader-body"
          dangerouslySetInnerHTML={{ __html: thought.content }}
        />

        {/* Reader Footer with Share & Previous/Next Navigation */}
        <footer className="reader-footer">
          <button 
            onClick={handleCopyLink} 
            className="share-copy-btn"
            title="Copy thought link"
          >
            {copied ? <Check size={14} color="#22c55e" /> : <Share2 size={14} />}
            <span>{copied ? 'Link copied!' : 'Share thought'}</span>
          </button>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {prevThought && (
              <button 
                onClick={() => onSelectThought(prevThought)}
                className="back-to-thoughts-btn"
                title={`Previous: ${prevThought.title}`}
              >
                <ArrowLeft size={13} />
                <span>Previous</span>
              </button>
            )}
            {nextThought && (
              <button 
                onClick={() => onSelectThought(nextThought)}
                className="back-to-thoughts-btn"
                title={`Next: ${nextThought.title}`}
              >
                <span>Next</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>
        </footer>
      </article>
    </div>
  );
}
