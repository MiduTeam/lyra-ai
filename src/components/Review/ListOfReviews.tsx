import { Product } from '@/lib/generatePrompt';
import Review from '.';

interface Props {
  reviews: Product[];
}

export default function ListOfReviews({ reviews }: Props) {
  return (
    <section
      className={`border bg-white flex flex-col justify-center" ${
        reviews.length > 0 ? '' : ' hidden'
      }`}
    >
      {reviews.map((review) => (
        <Review
          title={review?.title}
          originalBody={review.originalBody}
          ORConfidence={review.classification.labels.OR.confidence}
          CGConfidence={review.classification.labels.CG.confidence}
          rating={review.rating}
        />
      ))}
    </section>
  );
}
