const URL = "https://6286f39f7864d2883e7bf71d.mockapi.io/food";

class Services {
  fetchData() {
    return axios({
      url: URL,
      method: "GET",
    });
  }

  deleteFoodById(id) {
    return axios({
      url: `${URL}/${id}`,
      method: "DELETE",
    });
  }

  addItem(data) {
    return axios({
      url: URL,
      method: "POST",
      data: data,
    });
  }

  getFoodById(id) {
    return axios({
      url: `${URL}/${id}`,
      method: "GET",
    });
  }

  editItemById(data) {
    return axios({
      url: `${URL}/${data.id}`,
      method: "PUT",
      data: data,
    });
  }
}

export default Services;
