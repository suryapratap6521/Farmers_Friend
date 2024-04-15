const express= require('express');
const app=express();
const dotenv=require('dotenv');
const database = require("./config/database");
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/authRoutes');
const cors=require('cors');
dotenv.config();
const PORT=process.env.PORT || 4000;


//database connect
database.connect();


app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

//routes
app.use("/api/v1/auth", authRoutes);



app.listen(PORT,()=>{
    console.log(`Server is connected at ${PORT}`);
})