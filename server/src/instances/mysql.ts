import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("UPLOAD", "root", "Q8/]rath", {
  dialect: "mysql",
  port: 3306,
});
