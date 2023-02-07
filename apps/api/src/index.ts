import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import mCache from "memory-cache";
import { scrapper } from "./scrapper";
import dotenv from "dotenv";
const app = express();

const allowList = ["https://lyrai.fly.dev"];

dotenv.config();

const port = process.env.PORT || 3001;

app.use(
	cors({
		origin: (origin, callback) => {
			if (allowList.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
	}),
);

const cache = (duration: number) => {
	return (req, res, next) => {
		let key = `__express__${req.originalUrl}` || req.url;
		let cachedBody = mCache.get(key);
		if (cachedBody) {
			res.send(cachedBody);
			return;
		} else {
			res.sendResponse = res.send;
			res.send = (body: any) => {
				mCache.put(key, body, duration * 1000);
				res.sendResponse(body);
			};
			next();
		}
	};
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/scrapper/:url", cache(600), (req, res) => {
	const { url } = req.params;
	return scrapper(url, res);
});

app.get("/test", cache(10), (req, res) => {
	res.send(`This response was cached! ${new Date()}`);
});

app.listen(port, () => {
	console.log(`Server started on port https://localhost:${port}/`);
});
