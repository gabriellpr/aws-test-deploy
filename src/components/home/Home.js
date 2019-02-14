import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header className="home-header">
          <div className="grid-container">
            <div className="grid-item">
              <h5> Ryan LeBon </h5>
              <h5> Software Engineer </h5>
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <img
                className="header-image"
                src="https://via.placeholder.com/300"
              />
            </div>
          </div>
          <hr />
        </header>

        <img
          className="body-image"
          alt="img"
          src="https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg"
        />

        <div className="grid-container-two">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
        </div>
      </div>
    );
  }
}

export default Home;
