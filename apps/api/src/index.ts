import express from "express";
import { scrapper } from "./scrapper";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.PORT || 3001;

console.log(process.env.PORT);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/scrapper/:url", (req, res) => {
	const { url } = req.params;
	return scrapper(url, res);
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
