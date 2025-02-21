import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import { UserDetailS } from "../../model/User_Schema.js";

const usersignup = async (req, res) => {
  try {
    await connectDB("users");
    console.log("Connected to the database");
    // Extract data from the request body
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const newUser = new UserDetailS({
      email,
      password: hashedPassword,
    });
    
    await newUser.save();
    console.log("User saved successfully:", newUser);

    // Send a success response
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);

    // Send an error response
    res.status(500).json({ message: "Internal server error" });
  }
};

export default usersignup;