const services = require('../services/userService');

const list = async (req, res) => {
    const allAccountList = await services.all();
    res.json(allAccountList);
}
const listManager = async(req, res) =>{
    const listManager = await services.listManager(2);
    res.json(listManager);
}
const listEmployee = async (req, res) => {
  const listManager = await services.listManager(3);
  res.json(listManager);
}
const registerNewUser = async (req, res) => {
    let {
        username,
        password,
        name,
        role_id
    } = req.body;

    switch (role_id) {
        case "admin":
            role_id = 1;
            break;
        case "manager":
            role_id = 2;
            break;
        default:
            role_id = 3;
    }

    const checkExisted = await services.checkUserExist({username});
    if (checkExisted) {
        
    }

    const newUser = {username, password, name, role_id};
    try {
        const newUserCreated = await services.createUser(newUser);
        res.status(200);
        res.send(newUserCreated);
    } catch(err) {
        res.status(500);
        res.send(err);
    }
}
const getUserInfoByTask = async (req, res) => {
    const {
        id
    } = req.query;

    try {
        const userInfo = await services.getUserById({id});
        if (userInfo) {
            res.status(200);
            res.send(userInfo);
        }
    } catch(err) {
        res.status(500);
        console.log(err);
        res.send(err);
    }
}
module.exports = {
    list,
    listManager,
    listEmployee,
    registerNewUser,
    getUserInfoByTask
}