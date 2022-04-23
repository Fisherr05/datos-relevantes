import Sequelize from "sequelize";

export const sequelize = new Sequelize("monitoreo", "monitoreo", "patfa2021", {
  host: "patfa.site",
  dialect: "postgres",
});
