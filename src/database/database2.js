import{ Sequelize }from "sequelize";
import '../loadEnv.js';

export const sequelize2 = new Sequelize(process.env.DB_DATABASE2, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging:true,
});
