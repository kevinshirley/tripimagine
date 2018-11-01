import React, { Component } from 'react';
import HomeSection1 from './home-section-1';
import HomeSection2 from './home-section-2';
import HomeSection3 from './home-section-3';
import HomeSection4 from './home-section-4';
import HomeSection5 from './home-section-5';
import HomeSection6 from './home-section-6';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
      </main>
    );
  }
}

export default Home;
