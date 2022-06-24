const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/', controller.list);
router.get('/getListManager',controller.listManager);
router.get("/getListEmployee", controller.listEmployee);
router.post('/create', controller.registerNewUser);
router.get('/userByTask', controller.getUserInfoByTask);

module.exports = router;