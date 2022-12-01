import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProductosById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createProductos = async (req, res) => {
  try {
    const { nombre, precio, estado } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO productos (nombre, precio, estado) VALUES (?, ?, 1)",
      [nombre, precio]
    );
    res.status(201).json({ id: rows.insertId, nombre, precio, estado: 1 });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio } = req.body;

    const [result] = await pool.query(
      "UPDATE productos SET name = IFNULL(?, nombre), precio = IFNULL(?, precio) WHERE id = ?",
      [nombre, precio, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found", status: 404});

    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong", status: 500 });
  }
};

export const CambioEstado = async (req, res) => {
    try {
      const { id } = req.params;
      const { estado } = req.body;
  
      const [result] = await pool.query(
        "UPDATE productos SET  estado = IFNULL(?, estado) WHERE id = ?",
        [estado, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Employee not found" });
  
      const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };