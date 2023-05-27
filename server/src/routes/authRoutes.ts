import { Request, Response, Router } from "express";
import { login, signup } from "../controllers/authController";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
