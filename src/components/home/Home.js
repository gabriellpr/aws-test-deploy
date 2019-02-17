import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  
  render() {
     const projects = [1, 2, 3, 4,5,6];

    return (
      <div className="home-container">
        <header className="home-header">
          <div className="grid-container">
            <div className="grid-item">
              <h1> Ryan LeBon </h1>
              <h2> Software Engineer </h2>
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
