import { Router } from "express";
import {
  getPosts,
  createNewPost,
  deletePost,
  //   updatePost,
} from "../controllers/feedController";

const router = Router();

router.route("/").get(createNewPost);

export default router;
