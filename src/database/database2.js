import{ Sequelize }from "sequelize";

export const sequelize2 = new Sequelize("patfa", "monitoreo", "patfa2021", {
  host: "patfa.site",
  dialect: "postgres",
  logging:true,
});
