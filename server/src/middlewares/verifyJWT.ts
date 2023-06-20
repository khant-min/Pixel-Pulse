import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  // console.log("req headers: ", req.headers);
  const authHeader = (req.headers.authorization ||
    req.headers.Authorization) as string;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401); /// unauthorize
  console.log("header", authHeader); // Bearer token
  const token = authHeader.split(" ")[1];

  jwt.verify(token, "ahsdf232323323askfjaslk", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Unauthorized accesss!" }); //// invalid token < forbidden >
    // console.log("decoded", decoded);
    // req.user = decoded.UserInfo.username;
    // req.roles = decoded.UserInfo.roles;
    next();
  });
};

export default verifyJWT;
