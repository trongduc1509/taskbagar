const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/index");
const passport = require("./auth/passport");
const flash = require("connect-flash");
const app = express();

require('dotenv').config();

app.use(logger("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//get user from req
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use('/', mainRoutes);

//error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
      });
  });

const port = 8000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})

module.exports = app;