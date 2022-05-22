const express = require('express');
const router = express.Router();

const controller = require('../controllers/taskController');

router.get("/detailTask", controller.detailTask);
router.get('/', controller.list);
router.get('/addNewTask',controller.addTask);


module.exports = router;