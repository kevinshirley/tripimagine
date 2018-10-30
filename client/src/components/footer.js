import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import logo from '../assets/img/trip-imagine-logo-only.png';
import ks from '../assets/img/kevinshirley.png';

class Footer extends Component {

  constructor() {
    super();

    var today = new Date(), year = today.getFullYear();

    this.state = {
      year: year
    };
  }

  render() {
    return (
      <footer className="footer">

        <div className="inner-footer">

          <div className="contact-social">

            <div className="contact">
              <Fade bottom><a className="phone" href="tel:18006150592">1(800)615-0592</a></Fade>
              <Fade bottom><a className="email" href="mailto:info@tripimagine.com">info@tripimagine.com</a></Fade>
            </div>

            <div className="social">
              <ul>
                <Fade bottom><li><a href="https://www.facebook.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li></Fade>
                <Fade bottom><li><a href="https://www.instagram.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li></Fade>
                <Fade bottom><li><a href="mailto:info@tripimagine.com"><i className="far fa-envelope"></i></a></li></Fade>
              </ul>
            </div>

          </div>

          <div className="copyrightandall">

            <div className="copyright">
              <Fade bottom><small>&copy; {this.state.year} TripImagine, All Rights Reserved.</small></Fade>
            </div>

            <div className="logo">
              <Fade bottom><Link to="/"><img src={logo} alt="Trip Imagine Logo" /></Link></Fade>
            </div>

            <div className="poweredby">
              <Fade bottom><small>Powered By<a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer"><img src={ks} alt="Kevin Shirley" /></a></small></Fade>
            </div>

          </div>

          <div className="copyrightandall-mobile">

            <div className="poweredby">
              <Fade bottom><small>Powered By<a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer"><img src={ks} alt="Kevin Shirley" /></a></small></Fade>
            </div>

            <div className="copyright">
              <Fade bottom><small>&copy; {this.state.year} TripImagine, All Rights Reserved.</small></Fade>
            </div>

            <div className="logo">
              <Fade bottom><Link to="/"><img src={logo} alt="Trip Imagine Logo" /></Link></Fade>
            </div>

          </div>

        </div>

      </footer>
    );
  }
}

export default Footer;