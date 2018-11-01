import React, { Component } from 'react';
import ContactSection1 from './contact-section-1';
import ContactSection2 from './contact-section-2';
import ContactSection3 from './contact-section-3';
import ContactSection4 from './contact-section-4';

class Contact extends Component {
  render() {
    return (
      <main className="contact">
        <ContactSection1 />
        <ContactSection2 />
        <ContactSection3 />
        <ContactSection4 />
      </main>
    );
  }
}

export default Contact;