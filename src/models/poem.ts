import mongoose, { Schema } from "mongoose";

export type poemType = {
  id: string;
  title: string;
  verses: string;
  createdAt: Date;
  comments?: string[];
  likes?: string[];
};

const poemSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    verses: {
      type: String,
      required: true,
    },
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timestamps: true },
);

const Poem = mongoose.models.Poem || mongoose.model("Poem", poemSchema);

export default Poem;
