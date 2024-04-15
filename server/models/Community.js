const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema(
	{
		message: 
            {
            type: String,
            required: true,
            },
    
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Community", communitySchema);
