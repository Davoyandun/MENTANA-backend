const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Terapeuta", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
