import React, { Component } from 'react';
import $ from "jquery";
import Fade from 'react-reveal/Fade';

class HomeSection5 extends Component {
  formTrigger() {
    if ($('.trip-form').hasClass('trip-form-is-visible')) {
      // hide trip form
      $('.trip-form').removeClass('trip-form-is-visible').addClass('trip-form-not-visible');
      // hide background overlay
      $('.trip-form').css('background', 'transparent');
    } else {
      // display trip form
      $('.trip-form').removeClass('trip-form-not-visible').addClass('trip-form-is-visible');
      // display background overlay
      $('.trip-form').css('background', 'rgba(11,11,11,0.5)');
    }
  }

  render() {
    return (
      <section className="home-section-5">

        <div className="content">

          <div className="title">
            <Fade bottom><h3>What To Expect From Us</h3></Fade>
          </div>

          <div className="you-will">
            <Fade bottom cascade>
            <div className="item">
              <i className="far fa-object-group"></i>
              <h4>Custom Designed Itinerary</h4>
              <button onClick={this.formTrigger}>Get More</button>
            </div>
            </Fade>
            <Fade bottom cascade>
            <div className="item">
              <i className="fas fa-sign-out-alt"></i>
              <h4>Front Of The Line</h4>
              <button onClick={this.formTrigger}>Get More</button>
            </div>
            </Fade>
            <Fade bottom cascade>
            <div className="item">
              <i className="fas fa-parachute-box"></i>
              <h4>Private Local Guides</h4>
              <button onClick={this.formTrigger}>Get More</button>
            </div>
            </Fade>
          </div>

        </div>

      </section>
    );
  }
}

export default HomeSection5;