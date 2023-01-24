import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Task");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Task WHERE id = ?", [id]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { description } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Task (description) VALUES (?)",
      [description]
    );
    res.send({
      id: rows.insertId,
      description,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const [row] = await pool.query(
      "UPDATE Task set description = ? where id = ?",
      [description, id]
    );

    if (row.affectedRows === 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.send({
      id,
      description,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM Task WHERE id = ?", [id]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
