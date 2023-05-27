import express, { Request, Response } from "express";
import path from "path";
const router = express.Router();

export default router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
