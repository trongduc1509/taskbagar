const sequelize = require('sequelize');
const { op } = require('sequelize');
const { models } = require('../models');

const all = () => {
    return models.Task.findAll({raw: true});
}
const getTaskInfo =async (id) =>{
    let taskInfo;
    try {
        taskInfo = await models.sequelize.query(
          `SELECT LB AS labels, C AS comments, F AS files
          FROM public."LabelsInTask" LIT ,public. "Task" T,public. "Comment" C,public. "File" F,public ."Label" LB
          WHERE T.id=${id} AND T.id=LIT.task_id AND LIT.label_id=LB.id AND T.id=C.task_id AND T.id=F.task_id
           `,
          { type: sequelize.QueryTypes.SELECT }
        );
    } catch (err) {
      console.log(err);
    }
    return taskInfo; 
}
const addTask = async (task) =>{
  //console.log(task);
  console.log(task.label[0]);
  try {
    const newTask = await models.Task.create({
      name:task.name,
      project_id: task.project_id,
      createdby:task.createdby,
      status_id: task.status_id,
      starttime: task.starttime,
      endtime:task.endtime,
      description: task.description
    });
    await models.LabelsInTask.create({
      task_id: newTask.id,
      label_id: task.label[0].id
    });
  } catch (err) {
    console.log(err);
  }
}
const updateTask = async (request)=> {
    try {
      await models.Task.update({
        status_id: request.status_id
      },{
        where:{id: request.task_id}
      })
    } catch (err) {
      console.log(err);
    }
}
module.exports = {
    all,
    getTaskInfo,
    addTask,
    updateTask
}