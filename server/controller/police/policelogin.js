import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import { v4 as uuidv4 } from "uuid";
const uniqueId = uuidv4();
console.log("Generated UUID:", uniqueId);

import police_station_info from "../../model/Police_Schema.js"; // Import the model Ndirectly
import jwt from "jsonwebtoken";
const policelogin = async (req, res) => {
    console.log("Received request to login");
  try {
    await connectDB("police");
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await police_station_info.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User  not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) 
      {
      return res.status(401).json({ message: "Invalid credentials" });
    }


  return res.status(200).json({ message: "Login successful"} );

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default policelogin;