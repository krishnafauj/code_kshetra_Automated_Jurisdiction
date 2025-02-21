import bcrypt from "bcrypt";
import connectDB from "../connect.js";
import lawyer_id from "../../model/Lawyer_schema.js";

const lawyerlogin = async (req, res) => {
    console.log("Received request to login");
    try {
        await connectDB("lawyer");
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find the user by email
        const user = await lawyer_id.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User  not found" });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful", user: { email: user.email, role: user.role } });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default lawyerlogin;