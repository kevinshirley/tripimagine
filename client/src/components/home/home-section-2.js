import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class HomeSection2 extends Component {
  render() {
    return (
      <section className="home-section-2">
        <Fade bottom cascade>
          <div className="overlay">

            <div className="svg"></div>

            <div className="our-expertise">
              <div className="content">
                <h2>Our Expertise</h2>
                <div className="desc"><p>Your entire vacation experience carefully planned by our experts from top to bottom, for an ultimate experience and absolute peace of mind.</p></div>
              </div>
            </div>

          </div>
        </Fade>
      </section>
    );
  }
}

export default HomeSection2;