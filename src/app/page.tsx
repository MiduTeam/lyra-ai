'use client';
import { Product } from '@/lib/generatePrompt';
import { useEffect, useState } from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { calculateRating } from 'utils/generateRating';
import RootLayout from './layout';

export default function Home() {
  const year = new Date().getFullYear();
  const [input, setInput] = useState<string>('');
  const [reviews, setReviews] = useState<Product[]>([]);
  const url =
    'https%3A%2F%2Fwww.amazon.es%2FXiaomi-S-Calefactor-Inteligente-Impermeabilidad-Anti-Deslizante%2Fdp%2FB08J494KHH';

  const fetchReview = async () => {
    await fetch('/api/scrapper/' + input)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  };
  return (
    <>
      <nav className="flex justify-between p-5 border bg-white sticky">
        <span className="font-bold">Lyra AI</span>
        <div className="flex gap-6">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">FAQ</span>
          <span className="text-gray-500">Github</span>
        </div>
      </nav>
      <section className="flex flex-col xl:flex-row gap-2 justify-around border h-[90vh] text-start items-center">
        <h1 className="text-5xl  mt-8 max-w-md lg:text-7xl lg:max-w-xl font-extrabold text-black">
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
          from Fiction with Lyra's Review Analysis
        </h1>
        <div className="flex flex-col w-5/6 h-2/6 p-10 gap-5 max-w-lg bg-white rounded-xl m-5 shadow-lg">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Input your review here or enter an Amazon product URL"
            className="rounded p-3 border h-full border-gray-300"
          />
          <button
            onClick={fetchReview}
            className="bg-slate-800 text-white p-3 rounded shadow font-bold"
          >
            Search
          </button>
        </div>
      </section>
      <section
        className={`border bg-white flex flex-col gap-4 py-10 justify-center" ${
          reviews.length > 0 ? '' : ' hidden'
        }`}
      >
        {reviews.map((review) => (
          <div className="flex flex-col md:flex-row gap-20 p-10 justify-center">
            <div className="flex w-full flex-col max-w-sm">
              <h1 className="text-xl font-bold">{review?.title}</h1>
              <p className="text-sm">{review.originalBody}</p>
            </div>
            <div className="flex gap-5 items-center ">
              <div>
                <span className="font-bold text-3xl">Original Review</span>
                <p className="text-orange-400 font-bold text-2xl">
                  {(review.classification.labels.OR.confidence * 100).toFixed(
                    2,
                  )}
                  %
                </p>
                <span className="font-bold text-3xl ">Computer Generated</span>
                <p className="text-blue-500 font-bold text-2xl">
                  {(review.classification.labels.CG.confidence * 100).toFixed(
                    2,
                  )}
                  %
                </p>
              </div>
              <div>
                <span className="font-bold ">Rating</span>
                <p className="text-3xl">{calculateRating(review.rating)}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <footer>
        <div className="flex flex-col justify-center items-center p-10 gap-3">
          <h1 className="text-3xl font-bold">Lyra AI</h1>
          <p className="text-sm">
            {' '}
            {year} Lyra AI. Developed with 💜 by @ikurotime - @afor_digital -
            @SrDrabx - @pheralb_ - @TMCheiN.
          </p>
        </div>
      </footer>
    </>
  );
}
