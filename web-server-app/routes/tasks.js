const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: 'Diseñar UI', description: 'Pantalla principal', projectId: 1, status: 'pending' }
];

// GET /
router.get('/', (req, res) => res.json(tasks));

// GET /:id
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  task ? res.json(task) : res.status(404).json({ message: 'Tarea no encontrada' });
});

// POST /
router.post('/', (req, res) => {
  const { title, description, projectId } = req.body;
  const newTask = { id: tasks.length + 1, title, description, projectId, status: 'pending' };
  tasks.push(newTask);
  res.json({ message: 'Tarea creada' });
});

// PUT /:id
router.put('/:id', (req, res) => {
  const { status } = req.body;
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.status = status || task.status;
    res.json({ message: 'Tarea actualizada' });
  } else res.status(404).json({ message: 'Tarea no encontrada' });
});

// DELETE /:id
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: 'Tarea eliminada' });
});

module.exports = router;
