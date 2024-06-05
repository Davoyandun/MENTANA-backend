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

CitaModel(sequelize);
TerapeutaModel(sequelize);
UsuarioModel(sequelize);

const { Cita, Terapeuta, Usuario } = sequelize.models;

// Relationship ---------------------------

// Usuario-Cita
Usuario.hasMany(Cita);
Cita.belongsTo(Usuario);

// Usuario-Terapeuta
Usuario.hasMany(Terapeuta);
Terapeuta.hasMany(Usuario);

// Terapeuta-Cita
Terapeuta.hasMany(Cita);
Cita.belongsTo(Terapeuta);

module.exports = { Cita, Terapeuta, Usuario, sequelize };
