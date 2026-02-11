/**
 * Formats rating to one decimal place
 * @param {number} rating - Raw rating value
 * @returns {string} Formatted rating (e.g., "8.8")
 */
export const formatRating = (rating) => {
  return rating.toFixed(1);
};

/**
 * Joins genres array with comma separator
 * @param {string[]} genres - Array of genre strings
 * @returns {string} Comma-separated genres
 */
export const formatGenres = (genres) => {
  return genres.join(', ');
};

/**
 * Truncates text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};
