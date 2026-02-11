import { Star } from 'lucide-react';
import { formatRating } from '../utils/formatters';

const Rating = ({ rating, size = 'md', showIcon = true }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  return (
    <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
      {showIcon && <Star size={iconSizes[size]} className="fill-rating-star text-rating-star" />}
      <span className="font-semibold text-text-primary">{formatRating(rating)}</span>
    </div>
  );
};

export default Rating;
