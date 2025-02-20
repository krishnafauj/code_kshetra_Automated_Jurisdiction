import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://krishnafauj02:KNPb0xN5ZwTsdYdj@project1.rek9v.mongodb.net/?retryWrites=true&w=majority&appName=project1";
const client = new MongoClient(uri, {serverApi: {
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true,
}
});

async function connectDB() {
  console.log("inside mongo")
  try {
    await client.connect();
    
  } catch (err) {
    console.error("Connection error:", err);
  }
}
export default connectDB;