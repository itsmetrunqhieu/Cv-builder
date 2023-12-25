"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CV_tmplt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CV_tmplt.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      // preview_dir: {
      //   type: DataTypes.STRING,
      //   // allowNull: false,
      // },
      filePath: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "CV_tmplt",
    }
  );
  return CV_tmplt;
};
