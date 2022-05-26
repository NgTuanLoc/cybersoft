import React, { Component } from "react";

export default class glasses extends Component {
  renderGlasses = (glasses) => {
    return glasses.map((item) => {
      return (
        <div className="glasses__item" key={item.id}>
          <img src={process.env.PUBLIC_URL + item.url} alt={item.name} />
        </div>
      );
    });
  };

  render() {
    const { glassesProp } = this.props;

    return (
      <div className="glasses container mt-5 d-flex flex-wrap">
        {this.renderGlasses(glassesProp)}
      </div>
    );
  }
}
