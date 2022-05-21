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
      `SELECT T , S
          FROM public."Project" P,public. "Task" T
          INNER JOIN public."Status" S ON S.id=T.status_id  
          WHERE P.id=1 AND T.project_id=P.id
           `,
      { type: sequelize.QueryTypes.SELECT }
    );
  } catch (err) {
    console.log(err);
  }
  return projectInfo;
};
module.exports = {
  all,
  findProject,
  getProjectInfo,
  getProjectByEmployee,
};
