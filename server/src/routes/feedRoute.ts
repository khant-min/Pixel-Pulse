import { Router } from "express";
import {
  getAllPosts,
  createNewPost,
  deletePost,
  //   updatePost,
} from "../controllers/feedController";

const router = Router();

router.route("/").get(getAllPosts).post(createNewPost);

export default router;
