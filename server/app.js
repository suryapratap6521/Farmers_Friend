const express = require('express');
const app = express();
const dotenv = require('dotenv');
const database = require("./config/database");
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const communityRoutes = require('./routes/communityRoutes');
const genRoutes = require('./routes/smartRoutes'); 
const cors = require('cors');

dotenv.config();
const PORT = process.env.PORT || 4000;

// Database connect
database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/community", communityRoutes);
app.use("/api/v1/generative", genRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
