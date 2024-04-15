const Community = require("../models/Community");
const User=require('../models/User');
exports.createMessage = async (req, res) => {
    try {
        const { id } = req.user;
        const { message } = req.body;

        if (!message) {
            return res.status(403).json({
                success: false,
                message: "Message required",
            });
        }
        
        const data = await Community.create({ message: message, user: id });
        const messages_data = await Community.find({}).populate("user").exec();
        return res.status(201).json({
            success: true,
            message: "Message created",
            messages_data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error in creating messages",
        });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Community.find({}).populate("user").exec();

        if (!messages || messages.length === 0) {
            return res.status(403).json({
                success: false,
                message: "There are no messages in the community",
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "All messages are listed",
            messages: messages
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error in retrieving messages",
        });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.body;
        const { id } = req.user;

        if (!messageId) {
            return res.status(403).json({
                success: false,
                message: "No messageId is provided in the request",
            });
        }

        const message = await Community.findOneAndDelete({ _id: messageId, user: id });
        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found or you are not authorized to delete it",
            });
        }
        const messages_data = await Community.find({}).populate("user").exec();
        return res.status(200).json({
            success: true,
            message: "Message deleted successfully",
            messages_data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error in deleting message",
        });
    }
};

exports.allUsers=async(req,res)=>{
    try {
        const allUsers=await User.find({});
        return res.status(200).json({
            success:true,
            message:"All users are listed below",
            allUsers
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error in getting all users",
        })
    }
}