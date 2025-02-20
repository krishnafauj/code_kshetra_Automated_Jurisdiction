import express from 'express';
const server = express();
import connectDB from '../controller/connect.js';
connectDB();
server.listen(3001, () => {
    console.log("Server Connected");
});
