import mongoose from "mongoose";

async function connectMongoDB() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Mongodb URI not found");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("[connectMongoDB] ", error);
  }
}

export default connectMongoDB;
