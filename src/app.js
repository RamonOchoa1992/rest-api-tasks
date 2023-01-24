import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());

app.use("/api", tasksRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    mensaje: "Endpoint not found",
  });
});

export default app;
