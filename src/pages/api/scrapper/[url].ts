import { translate } from '@/lib/translate';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as playwright from 'playwright-aws-lambda';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { url } = req.query;

  if (!url) {
    console.log('Missing url');
    return res.status(400).json({ error: 'Missing url' });
  }

  // Hostname of the url should be *.amazon.*
  const hostname = new URL(url as string).hostname;
  if (!hostname.includes('amazon')) {
    return res.status(400).json({ error: 'Not an Amazon URL' });
  }

  // Get 1st path segment which contains the product name
  const pathname = new URL(url as string).pathname;
  const productName = pathname.split('/')[1];
  const productId = pathname.split('/')[3];

  // Redirect to "https://www.amazon.es/<Product Name>/product-reviews/<Product ID>/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews"
  const urlToScrap = `https://www.amazon.es/${productName}/product-reviews/${productId}/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews`;

  const browser = await playwright.launchChromium({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();
  await page.goto(urlToScrap as string);

  // Hide the cookie banner
  await page.click('#sp-cc-rejectall-link');

  // Get all data-hook="review" elements
  const reviews = await page.$$('[data-hook="review"]');

  const data = [];
  for (const review of reviews) {
    // Get the review body from data-hook="review-body" > span
    const reviewBody = await review.$eval(
      '[data-hook="review-body"] > span',
      (el) => el.textContent,
    );
    // Get the review title from data-hook="review-title" > span
    const reviewTitle = await review.$eval(
      '[data-hook="review-title"] > span',
      (el) => el.textContent,
    );
    // Get the review rating from data-hook="review-star-rating" > span > i
    const reviewRating = await review.$eval(
      '[data-hook="review-star-rating"] > span',
      (el) => el.textContent,
    );

    data.push({
      body: await translate(reviewBody as string),
      originalBody: reviewBody,
      title: reviewTitle,
      rating: parseRating(reviewRating as string),
    });
  }

  // Send the data to the client
  res.status(200).json(data);

  // Close browser
  await browser.close();
}

function parseRating(rating: string) {
  // Example: "5,0 de 5 estrellas"
  const ratingNumber = rating.split(' ')[0];
  return parseFloat(ratingNumber);
}