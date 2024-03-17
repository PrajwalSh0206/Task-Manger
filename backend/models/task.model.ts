// src/models/User.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "./index"; // Import Sequelize instance

class Task extends Model {
  public taskId?: number;
  public title!: string; // Definite assignment assertion
  public description!: string; // Definite assignment assertion
  public date!: string;
  public completed!: boolean; // Definite assignment assertion
  public important!: boolean; // Definite assignment assertion
  public createdAt!: Date;
  public updatedAt!: Date;
}

Task.init(
  {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    important: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: "Task", // Set the model name
    tableName: "task",
  }
);

export default Task;
