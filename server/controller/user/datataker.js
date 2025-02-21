import {Complaint} from "../../model/User_Schema.js"; // Ensure correct import
import connectDB from "../connect.js";

const datataker = async (req, res) => {
    console.log("hii");
    const { email } = req.body; // Destructuring email from req.body
    console.log(email);

    try {
        await connectDB("users"); // Ensure "users" is the correct database name
        const data = await Complaint.find({ useremail: email }); // Fetch complaints based on useremail
        if(data.length === 0) {
            console.log("No data found");
            res.status(404).json({ error: "No data found" }); // Send error response
            return;
        }
        console.log(data);
        res.status(200).json(data); // Send data as response
    } catch (err) {
        console.error("Error fetching complaints:", err);
        res.status(500).json({ error: "Internal Server Error" }); // Send error response
    }
};

export default datataker;
