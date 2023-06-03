import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Users",
  // },
  postText: {
    type: String,
  },
  postPic: {
    type: String,
  },
  // reactions: [
  //   { good: { type: String } },
  //   { love: { type: String } },
  //   { care: { type: String } },
  //   { haha: { type: String } },
  //   { wow: { type: String } },
  //   { sad: { type: String } },
  //   { angry: { type: String } },
  // ],
  // comments: [
  //   { username: mongoose.Schema.Types.ObjectId, ref: "Users", ment: String },
  // ],
  // share: [
  //   {
  //     user: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Users",
  //     },
  //   },
  // ],
});

export default mongoose.model("Posts", PostSchema);
