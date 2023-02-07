import type { Response } from "express";
import * as playwright from "playwright-aws-lambda";
import { translate } from "./utils/translate";
import { generatePrompt } from "./utils/generatePrompt";
import { getClassification } from "./utils/cohere";

export async function scrapper(url: string, res: Response) {
	if (!url) {
		console.log("Missing url");
		res.status(400).send({
			error: "Missing url",
		});
	}

	// Hostname of the url should be *.amazon.*
	const hostname = new URL(url as string).hostname;
	if (!hostname.includes("amazon")) {
		res.status(400).send({
			error: "Not an Amazon URL",
		});
	}

	const browser = await playwright.launchChromium({ headless: true });
	const context = await browser.newContext({
		viewport: { width: 1920, height: 1080 },
	});

	const page = await context.newPage();
	await page.goto(url as string);

	// Get all data-hook="review" elements
	const reviews = await page.$$('[data-hook="review"]');

	const data: any[] = [];
	for (const review of reviews) {
		// Get the review body from data-hook="review-body" > span
		const reviewBody = await review
			.$eval('[data-hook="review-body"] > span', (el) => el.textContent)
			// If the review body is empty, get the review body from data-hook="review-body" > div > div > span
			.catch(async () => {
				const reviewBody = await review.$eval(
					'[data-hook="review-body"] > div > div > span',
					(el) => el.textContent,
				);
				return reviewBody;
			});

		// Get the review title from data-hook="review-title" > span
		const reviewTitle = await review.$eval(
			'[data-hook="review-title"] > span',
			(el) => el.textContent,
		);
		// Get the review rating from data-hook="review-star-rating" > span > i
		const reviewRating = await review
			.$eval('[data-hook="review-star-rating"] > span', (el) => el.textContent)
			.catch(async () => {
				const reviewRating = await review.$eval(
					'[data-hook="cmps-review-star-rating"] > span',
					(el) => el.textContent,
				);
				return reviewRating;
			});

		const translated = await translate(reviewBody as string);

		// Necesitamos sacar el category de una query string
		const prompt = generatePrompt("Electronics_5", {
			body: translated,
			originalBody: reviewBody as string,
			title: reviewTitle as string,
			rating: parseRating(reviewRating as string),
		});

		const result = await getClassification([prompt]);

		data.push({
			body: translated,
			originalBody: reviewBody,
			title: reviewTitle,
			rating: parseRating(reviewRating as string),
			classification: {
				label: result[0].prediction,
				confidence: result[0].confidence,
				labels: result[0].labels,
			},
		});
	}

	// Close browser
	await browser.close();

	res.json(data);
}

function parseRating(rating: string) {
	// Example: "5,0 de 5 estrellas"
	const ratingNumber = rating.split(" ")[0];
	return parseFloat(ratingNumber);
}
