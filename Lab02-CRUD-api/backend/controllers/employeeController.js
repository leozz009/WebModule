const pool = require('../db');

// Obtener todos los empleados
exports.getAllEmployees = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employee ORDER BY name');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los empleados:', error);
    res.status(500).json({ error: 'Error al obtener los empleados' });
  }
};

// Obtener un empleado por ID
exports.getEmployeeById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employee WHERE id = $1', [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener el empleado:', error);
    res.status(500).json({ error: 'Error al obtener el empleado' });
  }
};

// Crear un nuevo empleado
exports.createEmployee = async (req, res) => {
  const { name, position, salary_currency } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El nombre del empleado es obligatorio' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO employee (name, position, salary_currency) VALUES ($1, $2, $3) RETURNING *',
      [name, position, salary_currency]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear el empleado:', error);
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
};

// Actualizar un empleado existente
exports.updateEmployee = async (req, res) => {
  const { name, position, salary_currency } = req.body;
  const employeeId = req.params.id;

  if (!name) {
    return res.status(400).json({ error: 'El nombre del empleado es obligatorio' });
  }

  try {
    const checkResult = await pool.query('SELECT * FROM employee WHERE id = $1', [employeeId]);

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    const updateResult = await pool.query(
      'UPDATE employee SET name = $1, position = $2, salary_currency = $3 WHERE id = $4 RETURNING *',
      [name, position, salary_currency, employeeId]
    );

    res.json(updateResult.rows[0]);
  } catch (error) {
    console.error('Error al actualizar el empleado:', error);
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};

// Eliminar un empleado
exports.deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;

  try {
    const checkResult = await pool.query('SELECT * FROM employee WHERE id = $1', [employeeId]);

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    await pool.query('DELETE FROM employee WHERE id = $1', [employeeId]);

    res.json({ message: 'Empleado eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el empleado:', error);
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
}