import React, { Component } from "react";
import "./Home.css";
import "./test.scss";
import background from '../../images/background.jpg'
import profile from '../../images/profile_picture.png'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
    

        <header className="home-header">
          <div className="grid-container">
            <div className="grid-item">
              <h5> Name </h5>
              <h6> Title </h6>
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <img
                className="header-image"
                src={profile}
              />
            </div>
          </div>
          <hr />
        </header>

        <img
          className="body-image"
          alt="img"
          src={background}
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
