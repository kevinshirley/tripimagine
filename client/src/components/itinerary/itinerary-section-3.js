import React, { Component } from 'react';
import $ from "jquery";
import Fade from 'react-reveal/Fade';

class ItinerarySection3 extends Component {
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
      <section className="atlas-section-3">
        <div className="content">

          <button onClick={this.formTrigger}>
            <Fade bottom><div><h3>Plan Your Dream Vacation</h3>&nbsp;</div></Fade>
            <Fade bottom><div><i className="fab fa-telegram-plane"></i></div></Fade>
          </button>

        </div>
      </section>
    );
  }
}

export default ItinerarySection3;