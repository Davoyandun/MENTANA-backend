// Models -----------------------------------------------
const CitaModel = require("./models/CitaModel");
const TerapeutaModel = require("./models/TerapeutaModel");
const UsuarioModel = require("./models/UsuarioModel");
// --------------------------------------------------------
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

TerapeutaModel(sequelize);
UsuarioModel(sequelize);
CitaModel(sequelize);

const { Terapeuta, Usuario, Cita } = sequelize.models;

// Relationship ---------------------------

// Usuario-Cita
Usuario.hasMany(Cita, { foreignKey: "usuarioId" });
Cita.belongsTo(Usuario,{ foreignKey: "usuarioId" });

// Terapeuta-Cita
Terapeuta.hasMany(Cita, { foreignKey: "terapeutaId" });
Cita.belongsTo(Terapeuta, { foreignKey: "terapeutaId" });

module.exports = { 
  Cita, 
  Terapeuta, 
  Usuario, 
  sequelize 
};
