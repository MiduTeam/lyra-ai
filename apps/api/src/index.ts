import express from "express";
import { scrapper } from "./scrapper";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/scrapper/:url", (req, res) => {
	const { url } = req.params;
	return scrapper(url, res);
});

app.listen(3001, () => {
	console.log("Server started on port 3001");
});
