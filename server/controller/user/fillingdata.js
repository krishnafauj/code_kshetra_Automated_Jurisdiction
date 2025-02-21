import { Complaint } from "../../model/User_Schema.js";
import connectDB from "../connect.js";

const userfillingdata=async(req,res)=>
{
       
    try{
        await connectDB("users");
        const data=req.body;
        const newData=new Complaint(data);
        await newData.save();
        res.status(200).json({message:"Data saved successfully"});
    }
    catch(err){
        console.log(err);
    }
}

export default userfillingdata;