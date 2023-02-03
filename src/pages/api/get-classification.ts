import { generatePrompt, Product } from "@/lib/generatePrompt";
import { getClassification } from "@/lib/cohere";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// Get product data from the request body
	const { product, category } = req.body;

	const prompt = generatePrompt(category, product as Product);

	const result = await getClassification([prompt]);

	res.status(200).json(result);
}
