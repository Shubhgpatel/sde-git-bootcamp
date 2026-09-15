function advancedSearch(tasks, criteria) {
  let results = tasks;
  // TODO: implement date range filtering
  // TODO: implement sorting
  if (criteria.title) {
    results = results.filter(t => 
      t.title.toLowerCase().includes(criteria.title.toLowerCase())
    );
  }
}