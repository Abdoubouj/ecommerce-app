export const convertRatingToStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const semiStars = rating - fullStars >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(1);
  }
  if (semiStars) {
    stars.push(0);
  }
  return stars;
};
