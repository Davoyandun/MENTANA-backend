const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = async (sequelize) => {
  sequelize.define("Appointment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    videoCallLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });
};
