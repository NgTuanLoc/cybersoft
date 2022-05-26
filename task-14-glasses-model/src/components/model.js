import React, { Component } from "react";

export default class model extends Component {
  render() {
    return (
      <div className="model container d-flex justify-content-around mb-5">
        <img
          src={process.env.PUBLIC_URL + "/images/model.jpg"}
          alt="model base"
          className="img-fluid rounded"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/model.jpg"}
          alt="model"
          className="img-fluid rounded"
        />
      </div>
    );
  }
}
