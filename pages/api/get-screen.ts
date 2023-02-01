import { translate } from "@/lib/translate";
import type { NextApiRequest, NextApiResponse } from "next";
import * as playwright from "playwright-aws-lambda";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { url } = req.query;

	if (!url) {
		console.log("Missing url");
		return res.status(400).json({ error: "Missing url" });
	}

	const browser = await playwright.launchChromium({ headless: true });
	const context = await browser.newContext({
		viewport: { width: 1920, height: 1080 },
	});
	const page = await context.newPage();
	await page.goto(url as string);

	// Click on "sp-cc-rejectall-link" id
	await page.click("#sp-cc-rejectall-link");

	// Screenshot the page
	const screenshot = await page.screenshot();
	res.setHeader("Content-Type", "image/png");
	res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
	res.end(screenshot);
}
