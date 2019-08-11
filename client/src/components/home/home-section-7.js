import React from 'react';
import Fade from 'react-reveal/Fade';

import ManWithLuggage from '../../assets/img/luggage-man-grey-room.png';

const HomeSection7 = (props) => {
  const url = props.location.pathname;

  const dontShow = url.includes('dashboard') ||
  url.includes('login') ||
  url.includes('register') ||
  url.includes('itinerary');

  return dontShow ? null : (
    <section className="shop-banner-link">
      <a href="https://shop.tripimagine.com/" target="_blank">
        <img src={ManWithLuggage} alt="Trip Imagine Shop"/>
        <div className="overlay">
          <div className="text">
            <Fade bottom>
              <h3>All The Travel Essentials You Need</h3>
              <div className="shop-btn">Shop Now</div>
            </Fade>
          </div>
        </div>
      </a>
    </section>
  );
};

export default HomeSection7;