import React, { Component } from 'react';
import AboutUsSection1 from './about-us-section-1';
import AboutUsSection2 from './about-us-section-2';
import AboutUsSection3 from './about-us-section-3';
import AboutUsSection4 from './about-us-section-4';

class AboutUs extends Component {
  render() {
    return (
      <main className="about-us">
        <AboutUsSection1 />
        <AboutUsSection2 />
        <AboutUsSection3 />
        <AboutUsSection4 />
      </main>
    );
  }
}

export default AboutUs;