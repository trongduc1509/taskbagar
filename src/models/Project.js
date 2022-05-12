const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project', {
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
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Category',
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
    tableName: 'Project',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Project_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
