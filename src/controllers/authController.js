const bcrypt = require("bcrypt");
const services = require("../services/authService");

const isAuthenticated = (req, res, next) => {
    if (req.user)
        res.redirect('/');
    next();
}

const loginPage = (req, res) => {
    //load login page
}

const registerPage = (req, res) => {
    //load register page
}

const register = async (req, res) => {
    const {
        username,
        password,
        name,
        role_id
    } = req.body;

    const check = await services.findUser({username, password});
    if (check) {
        //notify existed account
        return res.redirect('/auth/register');
    }

    const hashpassword = bcrypt.hashSync(password, 10);
    const newEmployee = { username, hashpassword, name, role_id };
    await services.createUser(newEmployee);
    res.redirect('/auth/login');
}

module.exports = {
    isAuthenticated,
    loginPage,
    registerPage,
    register
}