const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectController');

router.get('/', controller.list);
router.get("/employeeProject", controller.employeeProject);
router.get("/detailProject", controller.detailProject);
router.get("/:name", controller.searchProject);
router.post("/addNewProject",controller.addNewProject);

module.exports = router;