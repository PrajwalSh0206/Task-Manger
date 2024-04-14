import Task from "../models/task.model";

interface task {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
}

interface taskResponse {
  taskId?: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
}

export interface taskCondtion {
  completed?: boolean;
  important?: boolean;
}

export const createTask = async (taskData: task): Promise<void> => {
  try {
    await Task.create({ ...taskData });
  } catch (err) {
    console.error(err);
    const error = new Error("Failed In Create Task");
    throw error;
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await Task.destroy({
      where: {
        taskId: id,
      },
    });
    console.log("Task Deleted")
  } catch (error) {
    console.error(error);
    const err = new Error("Failed To Delete Task");
    throw err;
  }
};

export const getTasks = async (
  condition: taskCondtion
): Promise<Array<taskResponse>> => {
  try {
    const response: Array<taskResponse> = await Task.findAll({
      attributes: [
        ["taskId", "id"],
        "title",
        "description",
        "date",
        "completed",
        "important",
      ],
      where: { ...condition },
      raw: true,
    });
    return Promise.resolve(response);
  } catch (err) {
    console.error(err);
    const error = new Error("Failed In Create Task");
    throw error;
  }
};
