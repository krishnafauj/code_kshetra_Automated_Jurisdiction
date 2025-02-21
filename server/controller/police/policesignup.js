// policesignup.js
import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import police_station_info from "../../model/Police_Schema.js"; // Import the model directly

const policesignup = async (req, res) => {
  console.log("Received request to signup");
  try {
    await connectDB("police");
    // Extract data from the request body
    const { email, password, role } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new police_station_info({
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

export default policesignup;