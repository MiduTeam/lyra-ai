import { env } from '@/env/server.mjs';
import * as deepl from 'deepl-node';

const authKey = env.DEEPL_KEY; // Replace with your key
const translator = new deepl.Translator(authKey);

export async function translate(text: string) {
  const result = await translator.translateText(text, null, 'en-US');
  return result.text;
}
