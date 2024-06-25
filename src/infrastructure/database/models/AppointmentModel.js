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
    is_deleted:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    },
    therapistId:{
      type: DataTypes.UUID,
      allowNull:false,
      references: {
        model: "Therapists",
        key: "id"
      }
    },
  }, {
    timestamps: false
  });
};
