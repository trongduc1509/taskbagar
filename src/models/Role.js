const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
