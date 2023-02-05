import { useState } from 'react';
import { calculateRating } from 'utils/generateRating';
import ReviewStars from './ReviewStars';

interface Props {
  title?: string;
  originalBody: string;
  ORConfidence: number;
  CGConfidence: number;
  rating: number;
}

const Review = ({
  title,
  originalBody,
  ORConfidence,
  CGConfidence,
  rating,
}: Props) => {
  const [ratingStars, setRatingStars] = useState(() => calculateRating(rating));
  return (
    <div className="flex flex-col md:flex-row gap-20 p-10 justify-center odd:bg-slate-100 md:odd:bg-white">
      <div className="flex w-full flex-col max-w-sm">
        <ReviewStars ratingStars={ratingStars} />
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm">{originalBody}</p>
      </div>
      <div className="flex gap-5 items-center ">
        <div>
          <span className="font-bold text-3xl">Original Review</span>
          <p className="text-orange-400 font-bold text-2xl">
            {(ORConfidence * 100).toFixed(2)}%
          </p>
          <span className="font-bold text-3xl ">Computer Generated</span>
          <p className="text-blue-500 font-bold text-2xl">
            {(CGConfidence * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
