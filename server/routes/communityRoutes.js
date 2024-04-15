const express = require('express');
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { createMessage, getAllMessages, deleteMessage, allUsers } = require('../controllers/Community');

router.post('/createmessage', auth, createMessage);
router.get('/getallmessage', auth, getAllMessages);
router.post('/deletemessage',auth,deleteMessage);
router.get('/allusers',auth,allUsers);
module.exports = router;
