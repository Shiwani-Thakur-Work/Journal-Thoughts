import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ThoughtCard({ thought, onOpenThought }) {
  return (
    <article 
      className="thought-card"
      onClick={() => onOpenThought(thought)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenThought(thought);
        }
      }}
      aria-label={`Read thought: ${thought.title}`}
    >
      <div className="card-meta">
        <span className="card-date">{thought.date}</span>
        <span>•</span>
        <span className="category-tag">{thought.category}</span>
        <span>•</span>
        <span>{thought.readTime}</span>
      </div>

      <h2 className="card-title">{thought.title}</h2>

      <p className="card-excerpt">{thought.excerpt}</p>

      <div className="card-footer">
        <div className="reader-tags">
          {thought.tags && thought.tags.map(t => (
            <span key={t} className="reader-tag">{t}</span>
          ))}
        </div>
        <span className="read-link-hint">
          Read thought <ArrowUpRight size={13} />
        </span>
      </div>
    </article>
  );
}
