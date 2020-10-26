const getQuery = (search, queryString) => {
  const params = new URLSearchParams(search);
  const query = params.get(queryString);

  return query;
};

export default getQuery;
