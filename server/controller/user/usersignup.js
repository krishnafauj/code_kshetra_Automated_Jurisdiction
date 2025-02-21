import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import { UserDetailS } from "../../model/User_Schema.js";

const usersignup = async (req, res) => {
  try {
    await connectDB("users");
    // Extract data from the request body
    const { email, password,role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
   
    const newUser = new UserDetailS({
      email,
      password: hashedPassword,
      role
    });
    
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);

    res.status(500).json({ message: "Internal server error" });
  }
};

export default usersignup;