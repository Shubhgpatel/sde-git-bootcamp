function filterByStatus(tasks, status) {
  if (!status) return tasks;
  return tasks.filter(t => t.status === status);
}

function searchByTitle(tasks, query) {
  if (!query) return tasks;
  return tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
}

module.exports = { filterByStatus, searchByTitle };
