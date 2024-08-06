import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from './routes/index.js'

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "recap" })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
