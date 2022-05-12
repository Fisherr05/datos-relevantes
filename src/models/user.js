import { DataTypes } from "sequelize";
import { sequelize2 } from "../database/database2.js";

export const User = sequelize2.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  institucion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
