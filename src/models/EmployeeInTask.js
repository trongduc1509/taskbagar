const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeInTask', {
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
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Project',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'EmployeeInTask',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "EmployeeInTask_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
