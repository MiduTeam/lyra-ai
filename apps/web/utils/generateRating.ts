export function calculateRating(rating: number) {
  const maxRating = 5;
  const stars = '';
  if (rating < 5) {
    const result = stars
      .concat('1'.repeat(rating))
      .concat('0'.repeat(maxRating - rating));
    return result.split('');
  } else {
    return '1'.repeat(maxRating).split('');
  }
}
