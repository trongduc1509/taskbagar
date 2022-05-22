const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectController');
//router.get("/", controller.detailProject);
router.get('/', controller.list);
router.get("/employeeProject", controller.employeeProject);
router.get("/:name", controller.searchProject);

module.exports = router;