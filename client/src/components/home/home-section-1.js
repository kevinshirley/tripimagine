import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Typed from 'typed.js';

class HomeSection1 extends Component {
  componentDidMount() {
    const options = {
    	strings: ['Private<br/> Tour<br/> Planner<br/>', 'Expert<br/> Travel<br/> Planner<br/>'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
      loopCount: Infinity,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  render() {
    // setTimeout(this.reloadTyped, 5000);
    return (
      <section className="home-section-1">
        <div className="overlay">

          <div className="left-container section">
            <div className="text">
              {/* <Fade bottom><h1>Private<br/> Tour<br/> Planner<br/></h1></Fade> */}
              <Fade bottom><h1 ref={(el) => { this.el = el; }} onClick={() => this.typed.reset()}></h1></Fade>
              <Fade bottom><h4>Your Trip As Imagined</h4></Fade>
            </div>
          </div>

          <Fade bottom cascade><div className="img-container"></div></Fade>
          
        </div>
      </section>
    );
  }
}

export default HomeSection1;