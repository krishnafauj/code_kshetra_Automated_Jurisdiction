import { Router } from 'express';
const router = Router();
import usersignup from '../controller/user/usersignup.js'
import cors from 'cors';
import userVerify from '../controller/user/userverify.js';

router.use(cors());
router
    .post('/signup', (req, res)=> {
        usersignup(req, res);
    })
    .post('/login', (req, res) => {userVerify(req,res)})

    
    .post('/userverify/signup', (req, res) => {
        res.send('Hello World!');
    })
    .put('/', (req, res) => {
        res.send('Hello World!');
    })
    .delete('/', (req, res) => {
        res.send('Hello World! all');
    });
export default router;