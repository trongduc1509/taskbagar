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
  let task = req.body;
  console.log(task);
  await services.addTask(task);
}
const changeTask = async (req, res) => {
  let request = req.body;
  console.log(request);
  await services.addTask(request);
}
const updateTask = async (req, res) => {
  console.log(req.body);
  let request = req.body;
  await services.updateTask(request);
}
const deleteTask = async (req,res) =>{
  console.log(req.body);
  await services.deleteTask(req.body);
}
module.exports = {
    list,
    detailTask,
    addTask,
    changeTask,
    updateTask,
    deleteTask
}