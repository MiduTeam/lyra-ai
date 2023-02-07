import express from "express";
import cors from "cors";
import { scrapper } from "./scrapper";
import dotenv from "dotenv";
const app = express();

const allowList = ["http://localhost:3000", "https://lyrai.fly.dev"];

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

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/scrapper/:url", (req, res) => {
	const { url } = req.params;
	return scrapper(url, res);
});

app.listen(port, () => {
	console.log(`Server started on port https://localhost:${port}/`);
});
