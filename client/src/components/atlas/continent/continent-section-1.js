import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class ContinentSection1 extends Component {
  render() {
    return (
      <section className="continent-section-1">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>{ this.props.location.state.name }</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default ContinentSection1;