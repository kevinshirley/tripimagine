import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class ContactSection3 extends Component {
  render() {
    return (
      <section className="contact-section-3">
        <div className="overlay">
          
          <Fade bottom><p><span className="arrow">›</span> A representative is available to assist you from 8 a.m. to 7 p.m. Eastern Time (US) Monday through Sunday.</p></Fade>

          <Fade bottom><p><span className="arrow">›</span> Upon receiving an email or voicemail from you, a representative will follow up with you within 24h or less.</p></Fade>

        </div>
      </section>
    );
  }
}

export default ContactSection3;