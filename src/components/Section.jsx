import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, onViewAll }) => {
  const scrollRef = useRef(null);

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 px-6">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-accent-gold rounded" />
          <h2 className="font-heading text-3xl font-bold text-text-primary">
            {title}
          </h2>
        </div>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-accent-gold hover:underline transition-all group"
          >
            <span>View All</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
