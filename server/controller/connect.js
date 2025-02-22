import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 
async function connectDB(database) {
 
  const uri = `mongodb+srv://krishnafauj02:KNPb0xN5ZwTsdYdj@project1.rek9v.mongodb.net/${database}?retryWrites=true&w=majority&appName=project1`;
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB database:", mongoose.connection.name);

  } catch (err) {
    console.error("Connection error:", err);
  }
}

export default connectDB;
