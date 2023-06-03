import { config } from "dotenv";
config();
import express from "express";
import mongoose from "mongoose";
import root from "./routes/root";
import { connectDB } from "./config/connectDB";
import auth from "./routes/authRoute";
import posts from "./routes/feedRoute";
import cors from "cors";
const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/", root);
app.use("/api/auth", auth);
app.use("/api/posts", posts);

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
  app.listen(PORT, (): void =>
    console.log(`server is running on port ${PORT}`)
  );
});
