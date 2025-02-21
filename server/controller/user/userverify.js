import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import { UserDetailS } from "../../model/User_Schema.js";

const userVerify = async (req, res) => {
    try {
        const { email, password } = req.body;
  
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        await connectDB("users"); 

        const user = await UserDetailS.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        return res.status(200).json({ message: "Login successful", user: { email: user.email, role: user.role } });
    
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default userVerify;
