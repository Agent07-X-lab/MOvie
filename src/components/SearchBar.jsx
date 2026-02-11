import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, className = '' }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className={`flex items-center bg-secondary-bg rounded-button px-4 py-2 transition-all duration-300 ${isFocused ? 'shadow-glow ring-2 ring-accent-gold/30' : ''}`}>
        <Search size={20} className="text-text-secondary mr-3" />
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent border-none outline-none text-text-primary placeholder-text-secondary w-full"
        />
      </div>
    </form>
  );
};

export default SearchBar;
