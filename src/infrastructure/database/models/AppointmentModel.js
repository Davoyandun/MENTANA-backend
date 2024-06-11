const { DataTypes } = require("sequelize");

module.exports = async (sequelize) => {
  sequelize.define("Appointment", {
    // las referencias se veran mas en profundida luego ya que en teoría con las relaciones es suficiente
    // usuarioId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "UsuarioModel",
    //     key: "id",
    //   },
    // },
    // terapeutaId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "TerapeutaModel",
    //     key: "id",
    //   },
    // },
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
