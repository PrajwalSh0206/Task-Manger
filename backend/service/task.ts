import Task from "../models/task.model";

interface task {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
}

export const createTask = async (taskData: task): Promise<void> => {
  try {
    await Task.create({...taskData});
  } catch (err) {
    console.error(err);
    const error = new Error("Failed In Create Task");
    throw error;
  }
};
