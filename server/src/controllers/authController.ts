import { Request, Response } from "express";
import Users from "../models/Users";
import bcrypt from "bcrypt";
// import { generateToken } from "../config/generateToken";

interface UserProps {
  name: string;
  email: string;
  password: string;
  pic: string;
}

interface AuthProps {
  email: string;
  password: string;
}

export const signup = async (req: Request, res: Response) => {
  console.log("test in control", req.body);
  const { name, email, password, pic }: UserProps = req.body;
  if (!name || !email || !password || !pic)
    return res.json({ message: "Enter required fileds" });

  const duplicateUser = await Users.findOne({ email }).exec();
  if (duplicateUser)
    return res.status(409).json({ message: "Emial already exists" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await Users.create({
      name,
      email,
      password: hashedPassword,
      pic,
    });
    console.log("result in auth controller: ", result);
    res.status(201).json({ success: `New User ${name} created successfully` });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: AuthProps = req.body;
  if (!email || !password)
    return res.json({ message: "Enter required fields" });

  const foundUser = await Users.findOne({ email }).exec();
  if (!foundUser) return res.status(401).json({ message: "User unauthorized" });

  const matchPassword = await bcrypt.compare(password, foundUser.password);
  if (!matchPassword)
    return res.sendStatus(401).json({ error: "Invalid password" });

  // foundUser.token = generateToken(foundUser._id);
  const result = await foundUser.save();
  console.log("result in auth controller", result);
  res.json({ success: foundUser });
};
