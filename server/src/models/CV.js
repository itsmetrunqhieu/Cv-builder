"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CV extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CV.belongsTo(models.User, { targetKey: "id" });
      CV.belongsTo(models.CV_tmplt, {
        targetKey: "id",
      });
      models.User.hasMany(CV);
      models.CV_tmplt.hasMany(CV);
    }
  }
  CV.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      html_dir: {
        type: DataTypes.STRING,
      },
      preview_dir: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "CV",
    }
  );
  return CV;
};
