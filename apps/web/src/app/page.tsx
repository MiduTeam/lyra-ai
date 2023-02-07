'use client';
import type { Product } from '@/lib/generatePrompt';
import ListOfReviews from '@/components/Review/ListOfReviews';
import ReviewFrame from '@/components/ReviewFrame';
import { getReview } from '@/lib/fetchReview';
import { useEffect, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { getRateLimit } from '@/lib/rateLimit';
import Input from '@/components/Input/Input';

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [reviews, setReviews] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [rate, setRateLimit] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const rate = getRateLimit();
      setRateLimit(rate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchReview = async () => {
    if (input === '') return;
    setLoading(true);
    await getReview(input)
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  };

  return (
    <div className="bg-lyra-pattern">
      <section className="flex h-[80vh] flex-col items-center justify-around gap-2 text-start xl:flex-row">
        <h1 className="max-w-md mt-8 text-5xl font-extrabold text-black lg:max-w-xl lg:text-7xl">
          Separate{' '}
          <RoughNotation
            type="underline"
            color="orange"
            strokeWidth={5}
            padding={[0, 0, -10, 0]}
            show
          >
            Fact
          </RoughNotation>{' '}
          from Fiction with Lyra&apos;s Review Analysis
        </h1>
        <Input
          input={input}
          setInput={setInput}
          fetchReview={fetchReview}
          loading={loading}
          rate={rate}
        />
      </section>
      {Boolean(reviews.length) && (
        <ReviewFrame>
          <ListOfReviews reviews={reviews} />
        </ReviewFrame>
      )}
      {error && (
        <div className="flex h-[80vh] items-center justify-center">
          <h1 className="text-3xl font-bold">{error}</h1>
        </div>
      )}
    </div>
  );
}
