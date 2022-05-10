const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('File', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'File',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "File_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
