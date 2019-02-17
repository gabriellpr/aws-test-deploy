import React, { Component } from "react";
import "./Home.css";
import "./test.scss";
import background from '../../images/background.jpg'
import profile from '../../images/profile_picture.png'

class Home extends Component {
  
  render() {
     const projects = [1, 2, 3, 4,5,6];

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
        <h2>Projects</h2>
        <hr/>
        <div className="grid-container-two"> 
        {
          projects.map(i => {
            return  <div key={i} className="grid-item"> {i} </div>
          })
        }
        </div>
      </div>
    );
  }
}

export default Home;
