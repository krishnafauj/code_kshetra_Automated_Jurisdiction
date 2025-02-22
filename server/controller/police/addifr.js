import { Complaint } from "../../model/User_Schema.js";
import connectDB from "../connect.js";
const addfir = async (req, res) => {
    const { caseId, firNumber, firDate, firDescription, officerName, policeStation } = req.body
    console.log(req.body);

    try {
        await connectDB("users");
        const firData = [
            {
                firDate: new Date(),
                firEntries: [
                    { firNumber: "123", firDetails: "kjasdf" }, // Pair 1
                    { firNumber: "456", firDetails: "details2" } // Pair 2
                ]
            }
        ];
        
        const data = await Complaint.updateOne(
            { _id: caseId },
            {
                $push: {
                    fir: {
                        $each: firData
                    }
                }
            }
        );
        
       console.log("data is ",data); 
       res.status(200).json({ message: "FIR added successfully" });
    }catch (err) {
        console.log(err);
    }
}
export default addfir;
