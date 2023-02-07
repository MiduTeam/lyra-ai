import type { classifyRequest } from "cohere-ai/dist/models/index";
import cohere from "cohere-ai";
import dotenv from "dotenv";

dotenv.config();

cohere.init(process.env.COHERE_KEY as string);

export async function getClassification(inputs: string[]) {
	if (!inputs) throw new Error("Missing inputs");

	const response = await cohere.classify({
		model: "9aed3c60-c4d6-4c0f-8649-fcd7b3457657-ft",
		inputs: inputs,
	} as classifyRequest);

	return response.body.classifications;
}
