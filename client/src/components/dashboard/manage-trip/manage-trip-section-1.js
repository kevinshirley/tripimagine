import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class ManageTripSection1 extends Component {
  render() {
    return (
      <section className="header-section">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>Manage Trip</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default ManageTripSection1;