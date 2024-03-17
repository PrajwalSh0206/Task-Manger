import express, { Request, Response } from "express";
import Task from "../models/task.model";
import { createTask } from "../service/task";
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
    console.log(req.body);
    await createTask(req.body);
    return res.status(201).json({ message: "Created Successfully" }).send();
  }
);

export default router;
