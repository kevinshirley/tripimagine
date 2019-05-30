import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class AtlasSection1 extends Component {
  render() {
    return (
      <section className="atlas-section-1">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>Atlas</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default AtlasSection1;