import { Router } from 'express';
const router = Router();
import usersignup from '../controller/user/usersignup.js'
router
    .post('/signup', (req, res) => usersignup)
    .post('/login', (req, res) => {
        res.send('Hello World! from signup');

    })
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