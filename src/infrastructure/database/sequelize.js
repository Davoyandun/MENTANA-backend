// Models -----------------------------------------------
const AppointmentModel = require("./models/AppointmentModel");
const TherapistModel = require("./models/TherapistModel");
const UserModel = require("./models/UserModel");
const BlogModel = require("./models/BlogModel");
// --------------------------------------------------------
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

TherapistModel(sequelize);
UserModel(sequelize);
AppointmentModel(sequelize);
BlogModel(sequelize);

const { Therapist, User, Appointment, Blog} = sequelize.models;

// Relationship ---------------------------

// User-Appointment
User.hasMany(Appointment, { foreignKey: "userId" });
Appointment.belongsTo(User, { foreignKey: "userId" });

// Therapist-Appointment
Therapist.hasMany(Appointment, { foreignKey: "therapistId" });
Appointment.belongsTo(Therapist, { foreignKey: "therapistId" });

// Therapist-Blog
Therapist.hasMany(Blog, { foreignKey: "therapistId" });
Blog.belongsTo(Therapist, { foreignKey: "therapistId" });

module.exports = {
  Appointment,
  Therapist,
  User,
  Blog,
  sequelize
};
