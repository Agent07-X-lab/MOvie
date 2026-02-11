import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const AIAnalysis = ({ analysis }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-card p-6 shadow-glow"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center">
            <Bot size={24} className="text-purple-400" />
          </div>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-text-primary mb-2 flex items-center gap-2">
            AI Analysis
          </h3>
          <p className="text-text-secondary italic leading-relaxed">
            "{analysis}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAnalysis;
