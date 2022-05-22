const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');
const categoryRouter = require('./categoryRouter');
const projectRouter = require('./projectRouter');
const taskRouter = require('./taskRouter');
const authRouter = require('../routes/authRouter');

//required routes
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/categories', categoryRouter);
router.use('/projects', projectRouter);
router.use('/tasks', taskRouter);

module.exports = router;