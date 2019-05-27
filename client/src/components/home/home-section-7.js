import React from 'react';
import Fade from 'react-reveal/Fade';

import ManWithLuggage from '../../assets/img/luggage-man-grey-room.png';

const HomeSection7 = (props) => {
  const url = props.location.pathname;
  return url.includes('dashboard') ? null : (
    <section className="home-section-7">
      <a href="https://shop.tripimagine.com/" target="_blank">
        <img src={ManWithLuggage} alt="Trip Imagine Shop"/>
        <div className="overlay">
          <div className="text">
            <Fade bottom>
              <h3>All The Travel Essentials You need</h3>
              <div className="shop-btn">Shop Now</div>
            </Fade>
          </div>
        </div>
      </a>
    </section>
  )
};

export default HomeSection7;