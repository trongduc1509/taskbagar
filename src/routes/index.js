const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');
const categoryRouter = require('./categoryRouter');
const projectRouter = require('./projectRouter');
const taskRouter = require('./taskRouter');

//required routes
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/categories', categoryRouter);
router.use('/projects', projectRouter);
router.use('/tasks', taskRouter);

module.exports = router;