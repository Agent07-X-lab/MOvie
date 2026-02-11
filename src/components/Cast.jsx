import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const Cast = ({ cast }) => {
  return (
    <div>
      <h3 className="font-heading text-2xl font-bold text-text-primary mb-6">Top Cast</h3>
      <div className="flex gap-6">
        {cast.map((actor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-secondary-bg border-2 border-border flex items-center justify-center mb-3 hover:border-accent-gold transition-colors">
              <User size={32} className="text-text-secondary" />
            </div>
            <p className="text-text-primary text-sm text-center">{actor}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
