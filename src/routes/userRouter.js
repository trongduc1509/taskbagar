const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/', controller.list);
router.get('/getListManager',controller.listManager);
router.get("/getListEmployee", controller.listEmployee);

module.exports = router;