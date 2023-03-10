import type { classifyRequest } from 'cohere-ai/dist/models/index';
import cohere from 'cohere-ai';
import { env } from '@/env/server.mjs';

cohere.init(env.COHERE_KEY);

export async function getClassification(inputs: string[]) {
  if (!inputs) throw new Error('Missing inputs');

  const response = await cohere.classify({
    model: '9aed3c60-c4d6-4c0f-8649-fcd7b3457657-ft',
    inputs: inputs,
  } as classifyRequest);

  return response.body.classifications;
}
