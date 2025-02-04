import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

const PORT = 5320;
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello.Am Lynn");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "I am a web dev !" });
});

app.listen(PORT, () => {
  console.log(`Server Lyne is running on http://localhost:${PORT}`);
});
