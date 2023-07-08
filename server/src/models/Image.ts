import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface imageInstance extends Model {
  id: number;
  image: string;
}

export const Image = sequelize.define<imageInstance>("image", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  },
});
// Forçar a criação da tabela 'images' caso ela não exista
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tabela criada com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao criar tabela:", error);
  });
