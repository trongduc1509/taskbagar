const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { models } = require('../models');

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            const user = models.User.findOne({where: {username}, raw: true});
            if (!user) {
                return done(null, false, { message: "User not exist."});
            }
            if (!validPassword(user, password)) {
                return done(null, false, { message: "Incorrect password."});
            }
            return done(null, user);
        } catch(err) {
            done(err);
        }
    }
));

const validPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
};

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    models.User.findByPk(id, {raw: true})
        .then(res => done(null, res))
        .catch(err => done(err));
});

module.exports = passport;