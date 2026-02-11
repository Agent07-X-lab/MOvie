import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Section from '../components/Section';
import MovieCard from '../components/MovieCard';
import { getFeaturedMovie, getTrendingMovies, getTopRatedMovies } from '../data/mockMovies';

const Home = () => {
  const featuredMovie = getFeaturedMovie();
  const trendingMovies = getTrendingMovies();
  const topRatedMovies = getTopRatedMovies();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero movie={featuredMovie} />

      {/* Main Content */}
      <div className="max-w-container mx-auto py-16">
        {/* Trending Now Section */}
        <Section
          title="Trending Now"
          onViewAll={() => console.log('View all trending')}
        >
          {trendingMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </Section>

        {/* Top Rated Section */}
        <Section
          title="Top Rated"
          onViewAll={() => console.log('View all top rated')}
        >
          {topRatedMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </Section>
      </div>
    </div>
  );
};

export default Home;
