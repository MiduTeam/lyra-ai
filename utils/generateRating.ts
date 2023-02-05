export function calculateRating(rating: number) {
  const stars = '';
  if (rating < 5) {
    const maxRating = 5;
    const result = stars
      .concat('🌟'.repeat(rating))
      .concat('⭐'.repeat(maxRating - rating));
    return result;
  }
  return '🌟'.repeat(rating);
}
