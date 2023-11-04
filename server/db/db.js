import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(`There is an error connecting to the db: ${error.message}`);
    process.exit(1);
  }
};
