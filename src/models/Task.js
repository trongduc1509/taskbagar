const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Task', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Project',
        key: 'id'
      }
    },
    createdby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Task',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Task_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
