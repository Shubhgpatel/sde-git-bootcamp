const express = require('express');
const { requestLogger } = require('./middleware');
const app = express();
app.use(express.json());
app.use(requestLogger);

const tasks = [];
let nextId = 1;

app.get('/tasks', (req, res) => {
  res.json({ count: tasks.length, tasks: tasks });
});

app.post('/tasks', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = {
    id: nextId++,
    title: req.body.title.trim(),
    status: 'todo',
    createdAt: new Date().toISOString()
  };
  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Not found' });
  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;
  task.updatedAt = new Date().toISOString();
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  tasks.splice(index, 1);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
