import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class AboutUsSection3 extends Component {
  render() {
    return (
      <section className="about-us-section-3">
        <div className="overlay">

          <div className="about-us-desc-container">
            <Fade bottom><p>The aim of TripImagine© Luxury Travels is to offer an exceptional travel experience that is completely tailored to the specific needs of our customers. We are able, through a short questionnaire, to establish the traveler profile of our customers in order to provide them a tailor-made offer. This offer will consist of multiple flights, hotels, activities, as well as many other information very relevant to the planning of the trip in question, so that the experience of it is done in serenity and peace of mind. <br/><br/>We will take care of any reservations, according to your wishes as you have told us, and work in concert with our customers to build the perfect itinerary. It can be a matter of cruises or guided tours, private or group, our customers are entitled to outstanding services and benefits exclusively reserved for luxury customers of TripImagine©.</p></Fade>
          </div>
          
        </div>
      </section>
    );
  }
}

export default AboutUsSection3;