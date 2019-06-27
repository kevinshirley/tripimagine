import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import mexico from '../../assets/img/trip-imagine-mexico.jpg';
import luxuryHotel from '../../assets/img/trip-imagine-luxury-hotel.jpg';
import santorini from '../../assets/img/trip-imagine-santorini.jpg';
import poolSide from '../../assets/img/trip-imagine-pool-side.jpg';

class HomeSection4 extends Component {
  render() {
    return (
      <section className="home-section-4">

        <div className="box">
          <ul>

            <Fade bottom><li>
              <div className="img-fluid">
                <img src={mexico} alt="In Mexico With Trip Imagine" />
              </div>
              <div className="text-container">
                <div className="arrow">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="text">
                  <h6>Step 1.</h6>
                  <h4>Get In Touch With Us</h4>
                  <p>Our fun and simple “Dream Vacation” form takes about 2 minutes to complete and connects you with one of our Luxury Travel Consultant. Then, we schedule a quick chat to confirm we’re the right fit.</p>
                </div>
              </div>
            </li></Fade>

            <Fade bottom><li>
              <div className="img-fluid">
                <img src={luxuryHotel} alt="Luxury Hotel With Trip Imagine" />
              </div>
              <div className="text-container">
                <div className="arrow">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="text">
                  <h6>Step 2.</h6>
                  <h4>We Plan Your Dream Journey</h4>
                  <p>Your TripImagine Luxury Travel consultant is now your own personal vacation expert. Your consultant will be reaching out to our network of contacts, while tapping into our vast knowledge in traveling to build you the best itinerary for the most unforgettable trip.</p>
                </div>
              </div>
            </li></Fade>

            <Fade bottom><li>
              <div className="img-fluid">
                <img src={santorini} alt="In Santorini With Trip Imagine" />
              </div>
              <div className="text-container">
                <div className="arrow">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="text">
                  <h6>Step 3.</h6>
                  <h4>You Choose The Right Package</h4>
                  <p>Once you have decided on the custom-made itinerary that best suits your desires, your consultant arranges of all the reservations involved, making sure you are completely taken care of and that the process is as worry-free as can be.</p>
                </div>
              </div>
            </li></Fade>

            <Fade bottom><li>
              <div className="img-fluid">
                <img src={poolSide} alt="Pool Side With Trip Imagine" />
              </div>
              <div className="text-container">
                <div className="arrow">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="text">
                  <h6>Step 4.</h6>
                  <h4>Fly To Your Destination</h4>
                  <p>Take off to memory lane.</p>
                </div>
              </div>
            </li></Fade>

          </ul>
        </div>

      </section>
    );
  }
}

export default HomeSection4;