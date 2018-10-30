import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class SigninSection1 extends Component {
  render() {
    return (
      <section className="contact-section-1">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>Log in</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default SigninSection1;