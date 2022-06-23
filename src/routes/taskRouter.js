const express = require('express');
const router = express.Router();

const controller = require('../controllers/taskController');

router.get("/detailTask", controller.detailTask);
router.get('/', controller.list);
router.post('/addNewTask',controller.addTask);
router.post('/changeTask',controller.changeTask);
router.post('/updateTask',controller.updateTask);
router.delete('/deleteTask',controller.deleteTask);
module.exports = router;