import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Hello World" });
});

app.listen("3000", (): void => {
  console.log("Server is running");
});
