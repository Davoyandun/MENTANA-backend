const { DataTypes } = require("sequelize");
const UsuarioModel = require("./UsuarioModel");
const TerapeutaModel = require("./TerapeutaModel");

module.exports = (sequelize) => {
  sequelize.define("Cita", {
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: UsuarioModel,
        key: "id",
      },
    },
    terapeutaId: {
      type: DataTypes.INTEGER,
      references: {
        model: TerapeutaModel,
        key: "id",
      },
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    enlaceVideollamada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
