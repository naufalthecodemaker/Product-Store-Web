import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Connected to DB: ${mongoose.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 = exit with failure, 0 = success
  }
}