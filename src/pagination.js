function paginate(items, page = 1, limit = 10) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    data: items.slice(startIndex, endIndex),
    pagination: {
      page,
      limit,
      total: items.length,
      totalPages: Math.ceil(items.length / limit),
      hasNext: endIndex < items.length,
      hasPrev: page > 1
    }
  };
}

module.exports = { paginate };
