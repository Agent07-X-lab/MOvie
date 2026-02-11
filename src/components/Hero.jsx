import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import Badge from './Badge';
import { formatGenres } from '../utils/formatters';

const Hero = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop || movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-container mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Featured Badge */}
          <Badge className="mb-4">FEATURED</Badge>

          {/* Year and Genre */}
          <p className="text-text-secondary mb-4 text-sm md:text-base">
            {movie.year} • {formatGenres(movie.genres)}
          </p>

          {/* Title */}
          <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 md:mb-6 tracking-wide">
            {movie.title}
          </h1>

          {/* Synopsis */}
          <p className="text-text-primary text-base md:text-lg mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
            {movie.synopsis}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon={Play}>
              Watch Trailer
            </Button>
            <Button variant="secondary" icon={Info}>
              More Info
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
