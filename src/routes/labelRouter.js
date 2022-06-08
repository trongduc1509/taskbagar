const express = require('express');
const router = express.Router();

const controller = require('../controllers/labelController');

router.get('/', controller.list);
router.post('/', controller.createNewLabel);

module.exports = router;