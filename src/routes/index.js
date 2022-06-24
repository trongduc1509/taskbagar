const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');
const categoryRouter = require('./categoryRouter');
const projectRouter = require('./projectRouter');
const taskRouter = require('./taskRouter');
const authRouter = require('../routes/authRouter');
const statusRouter = require('./statusRouter');
const labelRouter = require('./labelRouter');
const labelInTaskRouter = require('./labelInTaskRouter');

//required routes
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/categories', categoryRouter);
router.use('/projects', projectRouter);
router.use('/tasks', taskRouter);
router.use('/status', statusRouter);
router.use('/labels', labelRouter);
router.use('/labelsInTask', labelInTaskRouter);

module.exports = router;