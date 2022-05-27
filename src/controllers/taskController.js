const services = require('../services/taskService');


const detailTask = async (req, res) => {
    const taskInfo = await services.getTaskInfo(req.query.id);
    res.json(taskInfo);

}
const list = async (req, res) => {
  const allTasksList = await services.all();
  res.json(allTasksList);
};

const addTask = async(req, res) => {
  console.log(req.body);
  
}
module.exports = {
    list,
    detailTask,
    addTask
}