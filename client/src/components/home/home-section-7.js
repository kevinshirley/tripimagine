import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import ManWithLuggage from '../../assets/img/luggage-man-grey-room.png';

const HomeSection7 = () => (
  <section className="home-section-7">
    <a href="https://www.shop.tripimagine.com/" target="_blank">
      <img src={ManWithLuggage} alt="Trip Imagine Shop"/>
      <div className="overlay">
        <div className="text">
          <h3>All The Travel Essentials You need</h3>
          <div className="shop-btn">Shop Now</div>
        </div>
      </div>
    </a>
  </section>
);

export default HomeSection7;