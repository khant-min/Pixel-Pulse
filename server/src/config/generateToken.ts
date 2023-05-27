import jwt, { Secret } from "jsonwebtoken";
import mongoose from "mongoose";

export const generateToken = (id: mongoose.Types.ObjectId) =>
  jwt.sign({ id }, process.env.JWT_SECRET as Secret, { expiresIn: "30d" });
