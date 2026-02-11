import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Plus, ArrowLeft } from 'lucide-react';
import { getMovieById, getRelatedMovies } from '../data/mockMovies';
import Button from '../components/Button';
import Rating from '../components/Rating';
import AIAnalysis from '../components/AIAnalysis';
import Cast from '../components/Cast';
import MovieCard from '../components/MovieCard';
import { formatGenres } from '../utils/formatters';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = getMovieById(id);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading text-text-primary mb-4">Movie not found</h2>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const relatedMovies = getRelatedMovies(movie);

  return (
    <div className="min-h-screen pb-16">
      {/* Back Button */}
      <div className="max-w-container mx-auto px-6 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Movie Details Container */}
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Poster */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-24">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full max-w-md mx-auto lg:max-w-none rounded-card shadow-glow-lg"
              />
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-logo text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                {movie.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-text-secondary mb-6">
                <Rating rating={movie.rating} size="lg" />
                <span className="hidden sm:inline">•</span>
                <span>{movie.year}</span>
                <span className="hidden sm:inline">•</span>
                <span>{movie.runtime}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" icon={Play} fullWidth>
                  Watch Now
                </Button>
                <Button variant="secondary" icon={Plus} fullWidth>
                  Add to Watchlist
                </Button>
              </div>
            </motion.div>

            {/* AI Analysis */}
            <AIAnalysis analysis={movie.aiAnalysis} />

            {/* Details Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card-bg rounded-card p-6 space-y-4"
            >
              <div>
                <h3 className="text-text-secondary text-sm mb-1">Director</h3>
                <p className="text-text-primary font-semibold">{movie.director}</p>
              </div>
              <div>
                <h3 className="text-text-secondary text-sm mb-1">Genres</h3>
                <p className="text-text-primary">{formatGenres(movie.genres)}</p>
              </div>
            </motion.div>

            {/* Storyline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">Storyline</h3>
              <div className="text-text-secondary leading-relaxed space-y-4">
                {movie.storyline.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Cast */}
            <Cast cast={movie.cast} />
          </div>
        </div>

        {/* Related Movies Section */}
        {relatedMovies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-accent-gold rounded" />
              <h2 className="font-heading text-3xl font-bold text-text-primary">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedMovies.map((relatedMovie, index) => (
                <motion.div
                  key={relatedMovie.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <MovieCard movie={relatedMovie} size="default" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
