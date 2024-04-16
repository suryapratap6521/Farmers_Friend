const express = require('express');
const router = express.Router();
const { genRun } = require('../controllers/SmartBot');

router.post('/run', genRun);

module.exports = router;
