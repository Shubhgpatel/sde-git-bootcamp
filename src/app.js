const express = require('express');
const app = express();
app.use(express.json());

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    status: 'todo',
    createdAt: new Date().toISOString()
  };
  tasks.push(task);
  res.status(201).json(task);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
