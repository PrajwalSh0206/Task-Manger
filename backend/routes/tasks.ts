import express, { Request, Response } from "express";
import Task from "../models/task.model";
import { createTask, getTasks } from "../service/task";
import { removeUndefinedFields } from "../modules/object";
const router = express.Router();

interface task {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
}

/**
 * @swagger
 * /task/create:
 *   post:
 *     summary: Create a new task
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     description: Endpoint to create a new task
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               completed:
 *                 type: boolean
 *               important:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post(
  "/create",
  async (req: Request<task>, res: Response): Promise<any> => {
    try {
      await createTask(req.body);
      return res.status(201).send({ message: "Created Successfully" });
    } catch (error) {
      console.log(`Error | ${error}`);
      return res.status(500).send({ message: error });
    }
  }
);

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Get task list
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     description: Endpoint to get task
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               completed:
 *                 type: boolean
 *               important:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get(
  "/",
  async (req: Request<task>, res: Response): Promise<any> => {
    try {
      const { completed, important } = req.body;
      let condition = removeUndefinedFields({ completed, important });
      const response = await getTasks({ ...condition });

      const result = {
        message: "Data Retrieved",
        data: response,
      };

      return res
        .status(200)
        .send(result);

    } catch (error) {
      console.log(`Error | ${error}`);
      return res
        .status(500)
        .send({ message: error })
    }
  }
);

export default router;
