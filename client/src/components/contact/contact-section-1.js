import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class ContactSection1 extends Component {
  render() {
    return (
      <section className="contact-section-1">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>Contact us</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default ContactSection1;