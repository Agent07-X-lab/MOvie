const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 bg-accent-gold text-primary-bg text-xs font-bold tracking-wide rounded ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
