const services = require('../services/projectService');

const list = async (req, res) => {
    const allProjectsList = await services.all();
    res.json(allProjectsList);
}
const searchProject = async (req, res) => {
  console.log(req.params.name);
  const projects = await services.findProject(req.params.name);
  res.json(projects);
}
const employeeProject = async (req, res) => {
  // const id = req.session.user.id
  // console.log(id);
  const projects = await services.getProjectByEmployee();
  console.log(projects);
  res.json(projects);
}
const detailProject = async (req, res)=>{
      let id = req.query.id;
      console.log(id);
      let projectInfo = await services.getProjectInfo(id);
      res.json(projectInfo);
}
module.exports = {
    list,
    searchProject,
    detailProject,
    employeeProject
}