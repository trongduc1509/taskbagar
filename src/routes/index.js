const express = require('express');
const router = express.Router();

const userRouter = require('../components/User');

//required routes
router.use('/users', userRouter);

module.exports = router;