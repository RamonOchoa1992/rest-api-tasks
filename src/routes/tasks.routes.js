import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTaskById,
  getTasks,
  updateTasks,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTaskById);

router.post("/tasks", createTasks);

router.put("/tasks/:id", updateTasks);

router.delete("/tasks/:id", deleteTasks);

export default router;
