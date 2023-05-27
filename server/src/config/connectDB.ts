import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khant-min:khantminfordatabase200@cluster0.vgq7wu5.mongodb.net/social_media?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("err in config", err);
  }
};
