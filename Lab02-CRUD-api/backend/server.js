const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/employees', employeeRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('API de Países funcionando correctamente con PostgreSQL');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});