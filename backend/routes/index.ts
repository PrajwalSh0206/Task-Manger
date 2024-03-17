import express from "express";
import taskRouter from "./tasks";

const router = express.Router();

router.use("/task", taskRouter);

export default router;
