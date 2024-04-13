const express= require('express');
const app=express();
const dotenv=require('dotenv');
const database = require("./config/database");


dotenv.config();
const PORT=process.env.PORT || 4000;


//database connect
database.connect();


app.listen(PORT,()=>{
    console.log(`Server is connected at ${PORT}`);
})