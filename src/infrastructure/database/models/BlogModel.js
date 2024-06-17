const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  sequelize.define("Blog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    image_url:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    therapistId:{
      type: DataTypes.UUID,
      allowNull:false,
      references: {
        model: "Therapists",
        key: "id"
      }
    },
    is_deleted:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
};
