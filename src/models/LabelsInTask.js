const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LabelsInTask', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Task',
        key: 'id'
      }
    },
    label_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Label',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'LabelsInTask',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LabelsInTask_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
