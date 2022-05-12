const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Label', {
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
    }
  }, {
    sequelize,
    tableName: 'Label',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Label_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
