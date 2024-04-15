const express=require('express');
const router=express.Router();

const {login,SignUp}=require('../controllers/Auth');


router.post('/signup',SignUp);
router.post('/login',login);

module.exports=router;