// Import the Mongoose library
const mongoose = require("mongoose");

// Define the community schema using the Mongoose Schema constructor
const communitySchema = new mongoose.Schema(
	{
	
		title:{
            type:String,
            required:true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
	},
	{ timestamps: true }
);

// Export the Mongoose model for the community schema, using the name "community"
module.exports = mongoose.model("Community", communitySchema);