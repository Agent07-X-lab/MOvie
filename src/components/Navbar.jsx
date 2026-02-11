import { useState } from 'react';
import { Film, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // TODO: Implement search functionality
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary-bg/80 backdrop-blur-navbar border-b border-border">
      <div className="max-w-container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <Film size={28} className="text-accent-gold md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-logo font-bold text-text-primary tracking-wider group-hover:text-accent-gold transition-colors">
              CINESEARCH
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Desktop User Avatar */}
          <div className="hidden md:flex items-center">
            <div className="w-10 h-10 rounded-full bg-secondary-bg border-2 border-accent-gold flex items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer">
              <User size={20} className="text-accent-gold" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary hover:text-accent-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <SearchBar onSearch={handleSearch} />
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-secondary-bg border-2 border-accent-gold flex items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                <User size={20} className="text-accent-gold" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
