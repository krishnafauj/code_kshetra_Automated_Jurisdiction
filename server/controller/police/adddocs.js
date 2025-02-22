import connectDB from "../connect.js";
import { Complaint } from "../../model/User_Schema.js";
const adddocs=async(req,res)=>
{
    const { caseId, documents } = req.body;
    console.log(caseId);
    console.log(documents);
    try {
        await connectDB("users");
        const data = await Complaint.updateOne(
            { _id: caseId }, // Find the case by its ID
            {
              $push: {
                documents: { $each: documents }, // Push all documents from the request body
              },
            }
          );
        console.log(data);
        res.status(200).json({ message: "Document added successfully" });
    } catch (err) {
        console.log(err);
    }
}
export default adddocs