const express = require('express');
const router = express.Router();

const controller = require('./userController');

router.get('/', controller.list);

module.exports = router;