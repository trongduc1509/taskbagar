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
module.exports = {
    list,
    searchProject
}