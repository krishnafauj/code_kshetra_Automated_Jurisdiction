import { Router } from 'express';
const router = Router();
import usersignup from '../controller/user/usersignup.js'
import cors from 'cors';
import userVerify from '../controller/user/userverify.js';
import policesignup from '../controller/police/policesignup.js';
import policelogin from '../controller/police/policelogin.js';
import magistratesignup from '../controller/magistrate/magistratesignup.js';
import magistratelogin from '../controller/magistrate/magistrate__login.js';
import lawyerlogin from '../controller/lawyer/lawyerlogin.js';
import lawyersignup from '../controller/lawyer/lawyersignup.js';
import authjwt from '../controller/auth/auth.js';
import userfillingdata from '../controller/user/fillingdata.js';
import datataker from '../controller/user/datataker.js';
router
    .use(cors())
    .post('/signup', (req, res) => {
        usersignup(req, res);
    })
    .post("/getcases",(req,res)=>{
        datataker(req,res)
    })
    .post('/login', (req, res) => { userVerify(req, res) })
    .post('/userdata', (req, res) => {
        userfillingdata(req, res);
    })

    .post('/police/signup',(req, res) => {
        policesignup(req, res);
    })
    .post('/police/login',(req, res) => {
        policelogin(req, res);
    })
    .post('/magistrate/signup', (req, res) => {
        magistratesignup(req, res);
    })
    .post('/magistrate/login',authjwt,(req, res) => {
        magistratelogin(req, res);
    })
    .post('/advocate/signup', (req, res) => {
        lawyersignup(req, res);
    })
    .post('/advocate/login', (req, res) => {
        lawyerlogin(req, res);
    })
    

export default router;