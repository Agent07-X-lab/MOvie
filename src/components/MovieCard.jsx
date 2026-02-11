import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';
import { formatGenres } from '../utils/formatters';

const MovieCard = ({ movie, size = 'default' }) => {
  const navigate = useNavigate();

  const sizeClasses = {
    small: 'w-40',
    default: 'w-56',
    large: 'w-64',
  };

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} flex-shrink-0 cursor-pointer group`}
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-card bg-card-bg shadow-card group-hover:shadow-glow transition-all duration-300">
        {/* Poster Image */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
            <Rating rating={movie.rating} size="sm" />
          </div>

          {/* Year Badge */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-text-secondary">
            {movie.year}
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          <h3 className="font-heading font-bold text-text-primary text-lg mb-2 truncate">
            {movie.title}
          </h3>
          <p className="text-text-secondary text-sm truncate">
            {formatGenres(movie.genres)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
