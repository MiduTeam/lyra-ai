'use client';
import type { Product } from '@/lib/generatePrompt';
import ListOfReviews from '@/components/Review/ListOfReviews';
import ReviewFrame from '@/components/ReviewFrame';
import { getReview } from '@/lib/fetchReview';
import { useEffect, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { getRateLimit } from '@/lib/rateLimit';

import { ChatBubbleCheck } from 'iconoir-react';
import { JellyTriangle } from '@uiball/loaders';
import clsx from 'clsx';

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
        <div className="flex flex-col w-5/6 max-w-lg gap-5 p-10 m-5 bg-white shadow-lg h-2/6 rounded-xl">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Input your review here or enter an Amazon product URL"
            className="h-full p-3 border border-gray-300 rounded"
          />
          <button
            onClick={fetchReview}
            className={clsx(
              'flex items-center justify-center rounded bg-slate-800 p-3 font-medium text-white shadow',
              loading ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
            disabled={loading || rate >= 10}
          >
            {rate >= 10 ? (
              'Limit Exceeded - Try again in 1 minute'
            ) : loading ? (
              <>
                <JellyTriangle size={20} speed={1.75} color="white" />
                <span className="ml-3">Loading...</span>
              </>
            ) : (
              <>
                <ChatBubbleCheck width={20} className="mr-2" />
                Analyze
              </>
            )}
          </button>
        </div>
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
