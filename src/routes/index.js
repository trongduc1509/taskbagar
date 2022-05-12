const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');

//required routes
router.use('/users', userRouter);
router.use('/roles', roleRouter);

module.exports = router;