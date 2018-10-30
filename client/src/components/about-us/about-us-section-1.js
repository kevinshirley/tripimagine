import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class AboutUsSection1 extends Component {
  render() {
    return (
      <section className="about-us-section-1">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>About us</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default AboutUsSection1;