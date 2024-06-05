const { DataTypes } = require("sequelize");


const TerapeutaModel = (sequelize) => {
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

module.exports = TerapeutaModel;
