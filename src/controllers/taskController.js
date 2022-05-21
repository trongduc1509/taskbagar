const services = require('../services/taskService');

const list = async (req, res) => {
    const allTasksList = await services.all();
    res.json(allTasksList);
}
const detailTask = async (req, res) => {
    console.log(req.query.id);
    const taskInfo = await services.getTaskInfo(req.query.id);
    res.json(taskInfo);
}
module.exports = {
    list,
    detailTask
}