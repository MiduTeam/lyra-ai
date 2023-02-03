// @ts-check
import { z } from 'zod';

export const serverSchema = z.object({
  COHERE_KEY: z.string(),
});

export const clientSchema = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string(),
});
