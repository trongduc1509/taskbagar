const { models } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const { QueryTypes } = require("sequelize");

const all = () => {
  return models.Project.findAll({ raw: true });
};

const findProject = async (name) => {
  let projects = await models.Project.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
    raw: true,
  });
  return projects;
};
const getProjectByEmployee = async () => {
  let projects;
  try {
    projects = await models.sequelize.query(
      `SELECT P 
      FROM public."Project" P, public. "EmployeeInProject" E
      WHERE E.user_id = 1 AND E.project_id = P.id`,
      { type: sequelize.QueryTypes.SELECT }
    );
  } catch (err) {
    console.log(err);
  }
  return projects;
};
const getProjectInfo = async (id) => {
  let projectInfo;
  try {
    projectInfo = await models.sequelize.query(
      `SELECT T.name, T.id,T.createdby, T.starttime,T.endtime,T.description,T.status_id, S.name AS status
          FROM public."Project" P,public. "Task" T
          INNER JOIN public."Status" S ON S.id=T.status_id  
          WHERE P.id=${id} AND T.project_id=P.id
           `,
      { type: sequelize.QueryTypes.SELECT }
    );
  } catch (err) {
    console.log(err);
  }
  return projectInfo;
};
const getProjectDetail = async (id) => {
  return models.Project.findByPk(id, {
    include: [{
      model: models.Customer,
      as: 'customer',
    }, {
      model: models.Category,
      as: 'category',
    }]
  });
};
const addProject = async(project) =>{
  
  try{
    const newProject = await models.Project.create({
      name: project.project_name,
      customer_id: 1,
      category_id: project.category,
      createdby: project.createdBy,
      starttime: "2022-05-22 19:10:25-07",
      endtime:'2022-10-22 19:10:25-07',
      description: project.project_description
    });
    
    for(let i=0;i<project.list_employees.length;i++){
      await models.EmployeeInProject.create({
        user_id: project.list_employees[i],
        project_id: newProject.id
      });
    }
    
  }catch(err){
    console.log(err);
  }
}
module.exports = {
  all,
  findProject,
  getProjectInfo,
  getProjectByEmployee,
  addProject,
  getProjectDetail
};
