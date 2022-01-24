const api = {
  get: ({ url }) =>
    fetch({
      url,
      method: "GET",
    }),
};
export default api;
