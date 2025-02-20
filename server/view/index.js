import express from 'express';
const server = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from '../routes/index.js';

dotenv.config();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', router);

import connectDB from '../controller/connect.js';
connectDB();
server.listen(3001, () => {
    console.log("Server Connected");
});
