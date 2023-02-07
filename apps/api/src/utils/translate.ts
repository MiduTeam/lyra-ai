import * as deepl from "deepl-node";
import dotenv from "dotenv";

dotenv.config();

const authKey = process.env.DEEPL_KEY as string; // Replace with your key
const translator = new deepl.Translator(authKey);

export async function translate(text: string) {
	const result = await translator.translateText(text, null, "en-US");
	return result.text;
}
