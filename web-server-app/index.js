const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Importar las rutas
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const peopleRoutes = require('./routes/people');

// Rutas base
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/people', peopleRoutes);

// Puerto
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
