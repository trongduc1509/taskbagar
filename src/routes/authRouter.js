const express = require("express");
const { response } = require("../app");
const router = express.Router();
const passport = require("../auth/passport");
const controller = require("../controllers/authController");

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) {
            res.status(400);
            res.send("No user exists");
        }
        else {
            req.logIn(user, err => {
                if (err) {
                    res.status(400);
                    res.send("error");
                    throw err;
                } else {
                    res.status(200);
                    res.send(user);
                    console.log(req.user);
                }
            })
        }
    })(req, res, next);
});

module.exports = router;