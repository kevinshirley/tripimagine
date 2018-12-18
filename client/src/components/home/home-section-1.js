import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class HomeSection1 extends Component {
  render() {
    return (
      <section className="home-section-1">
        <div className="overlay">

          <div className="left-container section">
            <div className="text">
              <Fade bottom><h1>Private<br/> Tour<br/> Planner<br/></h1></Fade>
              <Fade bottom><h4>Your Trip As Imagined</h4></Fade>
            </div>
          </div>

          <Fade bottom cascade><div className="img-container"></div></Fade>
          
        </div>
      </section>
    );
  }
}

export default HomeSection1;