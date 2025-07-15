import { Review } from "@prisma/client";

export const calculateRating = (numbers: number[]) => {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
};

export const calculateRatings = (reviews: Review[]) => {
  const overallCleanliness = calculateRating(
    reviews.map((review) => review.cleanlinessRate)
  );
  const overallNoiseLevel = calculateRating(
    reviews.map((review) => review.noiseLevelRate)
  );
  const overallLocation = calculateRating(
    reviews.map((review) => review.locationRate)
  );
  const overallAmenities = calculateRating(
    reviews.map((review) => review.amenitiesRate)
  );
  const averageRateByUser = reviews.map((review) => {
    const genreOfRates = [
      review.cleanlinessRate,
      review.noiseLevelRate,
      review.locationRate,
      review.amenitiesRate,
    ];
    return calculateRating(genreOfRates);
  });
  const overallRating = calculateRating([
    overallCleanliness,
    overallNoiseLevel,
    overallLocation,
    overallAmenities,
  ]);

  return {
    overallCleanliness,
    overallNoiseLevel,
    overallLocation,
    overallAmenities,
    averageRateByUser,
    overallRating,
  };
};
