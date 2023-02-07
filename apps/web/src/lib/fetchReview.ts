import type { Product } from "@/lib/generatePrompt";
import { checkRateLimit } from "./rateLimit";

export async function getReview(url: string) {
	// Check if the user has exceeded the rate limit.
	const rateLimitExceeded = checkRateLimit();
	if (rateLimitExceeded) {
		throw new Error("Rate limit exceeded");
	}
	const response = await fetch(
		`https://lyra-api.up.railway.app/scrapper/${encodeURIComponent(url)}`,
	);
	const review: Product[] = await response.json();
	return review;
}
