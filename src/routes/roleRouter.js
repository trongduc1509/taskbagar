const express = require('express');
const router = express.Router();

const controller = require('../controllers/roleController');

router.get('/', controller.list);

module.exports = router;