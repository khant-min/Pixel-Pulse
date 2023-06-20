import { Request, Response } from "express";
import Users from "../models/Users";
import bcrypt from "bcrypt";
import { sign, SignOptions } from "jsonwebtoken";

interface UserProps {
  name: string;
  email: string;
  password: string;
  // pic: string;
}

interface AuthProps {
  email: string;
  password: string;
}

export const signup = async (req: Request, res: Response) => {
  // console.log("test in control", req.body);
  const { name, email, password }: UserProps = req.body; /// need to restore pic
  if (!name || !email || !password)
    // pic
    return res.json({ message: "Enter required fileds" });

  const duplicate = await Users.findOne({ email }).exec();
  if (duplicate)
    return res.status(409).json({ message: "Emial already exists" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const payload = { email };
    const signInOptions: SignOptions = {
      expiresIn: "30s",
    };

    const accessToken = sign(
      payload,
      // process.env.ACCESS_TOKEN as string,
      "ahsdf232323323askfjaslk",
      signInOptions
    );

    const result = await Users.create({
      name,
      email,
      password: hashedPassword,
      accessToken,
      // pic,
    });
    // console.log("result in auth controller: ", result);
    res.status(201).json({ accessToken });
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
    return res.status(401).json({ error: "Invalid password" });

  const payload = { id: foundUser._id };
  const signInOptions: SignOptions = {
    expiresIn: "30s",
  };

  const accessToken = sign(
    payload,
    // process.env.ACCESS_TOKEN as string,
    "ahsdf232323323askfjaslk",
    signInOptions
  );

  foundUser.accessToken = accessToken;
  const result = await foundUser.save();
  // console.log(result);
  res.json({ accessToken });
};

export const logout = async (req: Request, res: Response) => {
  const { id }: { id: number } = req.body;
  if (!id) return res.status(403).json({ message: "ID is required" });

  const foundUser = await Users.findById(id).exec();
  if (!foundUser) return res.status(404).json({ message: "User not found" });

  foundUser.accessToken = "";
  const result = await foundUser.save();
  // console.log("result in auth", result);

  res.sendStatus(204);
};
