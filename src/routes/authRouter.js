const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const controller = require("../controllers/authController");

router.get('/login', controller.isAuthenticated, controller.loginPage);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true,
}));
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});
router.get('/register', controller.isAuthenticated, controller.registerPage);
router.post('/register', controller.register);

module.exports = router;