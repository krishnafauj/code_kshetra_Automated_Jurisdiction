import express from 'express';
const server = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from '../routes/index.js';
import connectDB from '../controller/connect.js';
dotenv.config();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', router);
server.listen(3001, () => {
    console.log("Server Connected");
});