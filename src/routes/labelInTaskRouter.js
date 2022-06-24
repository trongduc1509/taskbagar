const express = require('express');
const router = express.Router();

const controller = require('../controllers/labelInTaskController');

router.get('/', controller.getAllTaskLabels);

module.exports = router;