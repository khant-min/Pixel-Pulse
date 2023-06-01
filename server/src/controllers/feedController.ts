import { Request, Response } from "express";
import Posts from "../models/Posts";
import Users from "../models/Users";

interface PostProps {
  postText?: string;
  postPic?: string;
}

export const getPosts = async (req: Request, res: Response) => {
  const getPosts = await Posts.find().exec();
  if (!getPosts)
    return res.status(204).json({ message: "No posts to show, create one" });
};

export const createNewPost = async (req: Request, res: Response) => {
  const { postText, postPic }: PostProps = req.body;
  if (!(postText || postPic))
    return res.status(402).json({ message: "Post something..." });

  const savePost = await Posts.create({
    postText,
    postPic,
  });
  res.status(201).json({ message: "Post created successfully" });
};

// export const updatePost = async (req: Request, res: Response) => {
//   if (!req?.body?.id) return res.status(400).json({ message: "ID required" });

//   const foundPost = await Posts.findOne({ _id: req.body.id }).exec();
//   if (!foundPost) return res.status(400).json({ message: "Post not found" });

//   if (req.body?.postText) foundPost.post.postText = req.body.postText;
// };

export const deletePost = async (req: Request, res: Response) => {
  if (!req.body.id) return res.status(400).json({ message: "ID required" });

  const foundPost = await Posts.findOne({ _id: req.body.id }).exec();
  if (!foundPost) return res.status(400).json({ message: "Post not found" });

  const result = await Posts.deleteOne({ _id: req.body.id });
  res.json(result);
};
