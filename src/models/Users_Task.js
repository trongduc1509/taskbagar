const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users_Task', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Task',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Users_Task',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Users_Task_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
