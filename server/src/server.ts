import { config } from "dotenv";
config();
import express from "express";
import mongoose from "mongoose";
import root from "./routes/root";
import auth from "./routes/authRoutes";
import { connectDB } from "./config/connectDB";
const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());


app.use("/", root);
app.use("/api/auth", auth);

mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
  app.listen(PORT, (): void =>
    console.log(`server is running on port ${PORT}`)
  );
});
