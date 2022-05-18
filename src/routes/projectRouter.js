const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectController');

router.get('/', controller.list);
router.get("/:name", controller.searchProject);
module.exports = router;