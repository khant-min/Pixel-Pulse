import { Request, Response } from "express";
import Posts from "../models/Posts";
import Users from "../models/Users";

interface PostProps {
  postText?: string;
  postPic?: string;
}

export const getAllPosts = async (req: Request, res: Response) => {
  const getPosts = await Posts.find().exec();
  if (!getPosts)
    return res.status(204).json({ message: "No posts to show, create one" });
  res.status(200).json(getPosts);
};

export const createNewPost = async (req: Request, res: Response) => {
  const { postText }: PostProps = req.body; //// pic comes later
  if (!postText) return res.status(402).json({ message: "Post something..." });

  try {
    const savePost = await Posts.create({
      postText,
      // post pic
    });
    res.status(201).json(savePost);
  } catch (err: any) {
    res.sendStatus(500);
  }
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
