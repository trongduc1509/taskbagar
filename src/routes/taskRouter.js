const express = require('express');
const router = express.Router();

const controller = require('../controllers/taskController');

router.get("/", controller.detailTask);
router.get('/', controller.list);

module.exports = router;