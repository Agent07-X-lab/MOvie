import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, icon: Icon, fullWidth = false, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-button font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-accent-gold text-primary-bg hover:bg-yellow-500 active:scale-95',
    secondary: 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-bg active:scale-95',
    ghost: 'text-text-primary hover:text-accent-gold active:scale-95',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
};

export default Button;
