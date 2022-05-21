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
module.exports = {
    all,
    getTaskInfo
}