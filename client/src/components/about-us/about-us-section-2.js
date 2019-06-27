import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import video from '../../assets/video/italy-with-trip-imagine-travel.mp4';

class AboutUsSection2 extends Component {
  render() {
    return (
      <section className="about-us-section-2">
        <div className="overlay">

          <div className="left-container section">
            <div className="text">
              <h1>Trip<br/> Imagine<br/></h1>
            </div>
          </div>

          <div className="video-container">
            <Fade bottom>
            <video style={{ width: "100%", height: "100%" }} muted loop autoPlay>
              <source src={video} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            </Fade>
          </div>
          
        </div>
      </section>
    );
  }
}

export default AboutUsSection2;