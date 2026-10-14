import React from 'react';
import { Search, X } from 'lucide-react';
import { CATEGORIES } from '../content/thoughts';

export default function FilterBar({ 
  activeCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange, 
  totalCount,
  searchInputRef 
}) {
  return (
    <div className="controls-wrapper">
      <div className="search-container">
        <Search className="search-icon" size={16} />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search observations, ideas, quotes... (Press / to focus)"
          className="search-input"
          aria-label="Search thoughts"
        />
        {searchQuery ? (
          <button 
            onClick={() => onSearchChange('')} 
            className="clear-search-btn"
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        ) : (
          <span className="search-shortcut-hint">/</span>
        )}
      </div>

      <div className="filter-row">
        <div className="pills-group" role="tablist" aria-label="Filter thoughts by category">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat)}
                className={`filter-pill ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="filter-count">
          {totalCount} {totalCount === 1 ? 'thought' : 'thoughts'}
        </div>
      </div>
    </div>
  );
}
