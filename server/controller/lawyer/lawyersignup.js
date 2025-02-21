// policesignup.js
import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import lawyer_id from "../../model/Lawyer_schema.js";

const lawyersignup = async (req, res) => {
  console.log("Received request to signup");
  try {
    await connectDB("lawyer");
    // Extract data from the request body
    const { email, password, role } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new  lawyer_id({
      email,
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default lawyersignup;