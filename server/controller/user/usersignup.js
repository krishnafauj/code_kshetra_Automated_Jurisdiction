import bcrypt from "bcrypt";
import UserDetailS from "../model/User_Schema.js";
const usersignup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const existingUser = await UserDetailS.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new UserDetailS({
            email,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

export default usersignup;
