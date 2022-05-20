class Services {
  fetchData() {
    return axios({
      url: "https://6286f39f7864d2883e7bf71d.mockapi.io/food",
      method: "GET",
    });
  }

  deleteFoodById(id) {
    return axios({
      url: `https://6286f39f7864d2883e7bf71d.mockapi.io/food/${id}`,
      method: "DELETE",
    });
  }
}

export default Services;
