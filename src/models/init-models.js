var DataTypes = require("sequelize").DataTypes;
var _Category = require("./Category");
var _Comment = require("./Comment");
var _Customer = require("./Customer");
var _EmployeeInProject = require("./EmployeeInProject");
var _File = require("./File");
var _Label = require("./Label");
var _LabelsInTask = require("./LabelsInTask");
var _Project = require("./Project");
var _Role = require("./Role");
var _Status = require("./Status");
var _Task = require("./Task");
var _User = require("./User");
var _Users_Task = require("./Users_Task");

function initModels(sequelize) {
  var Category = _Category(sequelize, DataTypes);
  var Comment = _Comment(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var EmployeeInProject = _EmployeeInProject(sequelize, DataTypes);
  var File = _File(sequelize, DataTypes);
  var Label = _Label(sequelize, DataTypes);
  var LabelsInTask = _LabelsInTask(sequelize, DataTypes);
  var Project = _Project(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Status = _Status(sequelize, DataTypes);
  var Task = _Task(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var Users_Task = _Users_Task(sequelize, DataTypes);

  Project.belongsTo(Category, { as: "category", foreignKey: "category_id"});
  Category.hasMany(Project, { as: "Projects", foreignKey: "category_id"});
  Project.belongsTo(Customer, { as: "customer", foreignKey: "customer_id"});
  Customer.hasMany(Project, { as: "Projects", foreignKey: "customer_id"});
  LabelsInTask.belongsTo(Label, { as: "label", foreignKey: "label_id"});
  Label.hasMany(LabelsInTask, { as: "LabelsInTasks", foreignKey: "label_id"});
  EmployeeInProject.belongsTo(Project, { as: "project", foreignKey: "project_id"});
  Project.hasMany(EmployeeInProject, { as: "EmployeeInProjects", foreignKey: "project_id"});
  Task.belongsTo(Project, { as: "project", foreignKey: "project_id"});
  Project.hasMany(Task, { as: "Tasks", foreignKey: "project_id"});
  User.belongsTo(Role, { as: "role", foreignKey: "role_id"});
  Role.hasMany(User, { as: "Users", foreignKey: "role_id"});
  Task.belongsTo(Status, { as: "status", foreignKey: "status_id"});
  Status.hasMany(Task, { as: "Tasks", foreignKey: "status_id"});
  Comment.belongsTo(Task, { as: "task", foreignKey: "task_id"});
  Task.hasMany(Comment, { as: "Comments", foreignKey: "task_id"});
  File.belongsTo(Task, { as: "task", foreignKey: "task_id"});
  Task.hasMany(File, { as: "Files", foreignKey: "task_id"});
  LabelsInTask.belongsTo(Task, { as: "task", foreignKey: "task_id"});
  Task.hasMany(LabelsInTask, { as: "LabelsInTasks", foreignKey: "task_id"});
  Users_Task.belongsTo(Task, { as: "task", foreignKey: "task_id"});
  Task.hasMany(Users_Task, { as: "Users_Tasks", foreignKey: "task_id"});
  Comment.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Comment, { as: "Comments", foreignKey: "user_id"});
  EmployeeInProject.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(EmployeeInProject, { as: "EmployeeInProjects", foreignKey: "user_id"});
  Project.belongsTo(User, { as: "createdby_User", foreignKey: "createdby"});
  User.hasMany(Project, { as: "Projects", foreignKey: "createdby"});
  Task.belongsTo(User, { as: "createdby_User", foreignKey: "createdby"});
  User.hasMany(Task, { as: "Tasks", foreignKey: "createdby"});
  Users_Task.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Users_Task, { as: "Users_Tasks", foreignKey: "user_id"});

  return {
    Category,
    Comment,
    Customer,
    EmployeeInProject,
    File,
    Label,
    LabelsInTask,
    Project,
    Role,
    Status,
    Task,
    User,
    Users_Task,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
