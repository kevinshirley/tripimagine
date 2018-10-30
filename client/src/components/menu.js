import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import $ from "jquery";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';

import logo from '../assets/img/trip-imagine-logo-only.png';
import lock from '../assets/img/data-privacy-lock.png';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  success: '',
  errors: {}
};

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  errors: {}
};

const initialSuccessState = {
  success: ''
};

class Menu extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onTripFormSubmit = this.onTripFormSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.resetFormState = this.resetFormState.bind(this);
    this.onSuccessClose = this.onSuccessClose.bind(this);
    this.formTrigger = this.formTrigger.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  resetState() {
    this.setState(initialState);
  }

  resetFormState() {
    this.setState(initialFormState);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onTripFormSubmit(e) {
    e.preventDefault();

    const newForm = {
      'name': this.state.name,
      'email': this.state.email,
      'phone': this.state.phone,
      'message': this.state.message
    };

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(newForm),
      url: 'http://localhost:5000/trip-form'
    }; // 'http://www.tripimagine.com:5000/trip-form'

    axios(options)
      .then(res => {
        this.setState({ success: res.data.success });
        this.resetFormState();
      })
      .catch(err => this.setState({ errors: err.response.data }));
  }

  onLogout(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser(this.props.history);
  }

  onSuccessClose() {
    this.setState(initialSuccessState);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  menuTrigger() {
    if ($('.navigation').hasClass('nav-is-visible')) {
      // hide side menu
      $('.menu-bar .navigation').removeClass('nav-is-visible').addClass('nav-not-visible');
      // change back to menu icon
      $('.nav-menu .menu .menuBtn').html('<i class="fas fa-bars"></i> <span>Menu</span>');
      //
      $('.nav-menu').css('display', 'none');
      //
      $('.navigation').css('display', 'none');
      $('.navigation .mobile-content').css('display', 'none');
    } else {
      //
      $('.navigation').css('display', 'block');
      $('.navigation .mobile-content').css('display', 'block');
      // display side menu
      $('.menu-bar .navigation').removeClass('nav-not-visible').addClass('nav-is-visible');
      // change to exit icon
      $('.nav-menu .menu .menuBtn').html('<i class="far fa-times-circle"></i> <span>Menu</span>');
      //
      $('.nav-menu').css('display', 'flex');
      $('.nav-menu').css('justify-content', 'space-around');
    }
  }

  hideNavOnClick() {
    // hide side menu
    $('.menu-bar .navigation').removeClass('nav-is-visible').addClass('nav-not-visible');
    // change back to menu icon
    $('.nav-menu .menu .menuBtn').html('<i class="fas fa-bars"></i> <span>Menu</span>');
    //
    $('.nav-menu').css('display', 'none');
    //
    $('.navigation').css('display', 'none');
    $('.navigation .mobile-content').css('display', 'none');
  }

  formTrigger() {
    if ($('.trip-form').hasClass('trip-form-is-visible')) {
      // hide trip form
      $('.trip-form').removeClass('trip-form-is-visible').addClass('trip-form-not-visible');
      // hide background overlay
      $('.trip-form').css('background', 'transparent');
      // empty form fields
      this.resetFormState();
    } else {
      // display trip form
      $('.trip-form').removeClass('trip-form-not-visible').addClass('trip-form-is-visible');
      // display background overlay
      $('.trip-form').css('background', 'rgba(11,11,11,0.5)');
    }
  }

  render() {
    const { errors } = this.state;
    const { success } = this.state;
    const { isAuthenticated, user } = this.props.auth;

    const menuAuthLinks = (
      <ul>
        <li onClick={this.hideNavOnClick}><Link to="/dashboard"><img src={user.avatar} className="rounded-circle" style={{ width: '25px', marginRight: '5px' }} alt={user.name} title="You must have an Avatar connected to your email to display an image" /> Profile</Link></li>
        <li onClick={this.hideNavOnClick}><a href="/" onClick={this.onLogout}>Log Out</a></li>
      </ul>
    );

    const menuGuestLinks = (
      <ul>
        <li onClick={this.hideNavOnClick}><Link to="/login">Log in</Link></li>
        <li onClick={this.hideNavOnClick}><Link to="/register">Sign up</Link></li>
      </ul>
    );

    const navbarGuestLink = (
      <button className="formBtn" onClick={this.formTrigger}><i className="far fa-paper-plane"></i> <span>Dream Vacation</span></button>
    );

    const navbarAuthLink = (
      <button className="formBtn" onClick={this.hideNavOnClick}><Link to="/dashboard" className="navbar-icon-link"><i className="material-icons">dashboard</i></Link> <span><Link to="/dashboard" className="navbar-text-link">Dashboard</Link></span></button>
    );

    return (
      <div className="menu-bar">
        <nav className="nav">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Trip Imagine Logo" /></Link>
          </div>
          <div className="menu">
            {isAuthenticated ? navbarAuthLink : navbarGuestLink}
            <button className="menuBtn" onClick={this.menuTrigger}><i className="fas fa-bars"></i> <span>Menu</span></button>
          </div>
        </nav>

        <div className="navigation">

          <div className="content">
            <div className="overlay">
              <nav className="nav-menu">
                <div className="logo">
                  <Link to="/"><img src={logo} onClick={this.hideNavOnClick} alt="Trip Imagine Logo" /></Link>
                </div>
                <div className="menu">
                  {isAuthenticated ? navbarAuthLink : navbarGuestLink}
                  <button className="menuBtn" onClick={this.menuTrigger}><i className="fas fa-bars"></i> <span>Menu</span></button>
                </div>
              </nav>

              <div className="content-split">
                <div className="left">
                  <div className="overlay"></div>
                </div>
                <div className="right">
                  <div className="authenticate">
                    {isAuthenticated ? menuAuthLinks : menuGuestLinks}
                  </div>
                  <div className="list-social">
                    <nav className="list">
                      <ul>
                        <li onClick={this.hideNavOnClick}><Link to="/atlas">Atlas</Link></li>
                        <li onClick={this.hideNavOnClick}><Link to="/contact">Contact</Link></li>
                        <li onClick={this.hideNavOnClick}><Link to="/blog">Blog</Link></li>
                        <li onClick={this.hideNavOnClick}><Link to="/about">About</Link></li>
                      </ul>
                    </nav>

                    <div className="social">
                      <ul>
                        <li><a href="https://www.facebook.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://www.instagram.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="mailto:info@tripimagine.com"><i className="far fa-envelope"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-content">
            <div className="overlay">
              <nav className="nav-menu">
                <div className="logo">
                  <Link to="/"><img src={logo} onClick={this.hideNavOnClick} alt="Trip Imagine Logo" /></Link>
                </div>
                <div className="menu">
                  {isAuthenticated ? navbarAuthLink : navbarGuestLink}
                  <button className="menuBtn" onClick={this.menuTrigger}><i className="fas fa-bars"></i> <span>Menu</span></button>
                </div>
              </nav>

              <div className="authenticate">
                {isAuthenticated ? menuAuthLinks : menuGuestLinks}
              </div>

              <div className="list-social">
                <nav className="list">
                  <ul>
                    <li onClick={this.hideNavOnClick}><Link to="/atlas">Atlas</Link></li>
                    <li onClick={this.hideNavOnClick}><Link to="/contact">Contact</Link></li>
                    <li onClick={this.hideNavOnClick}><Link to="/blog">Blog</Link></li>
                    <li onClick={this.hideNavOnClick}><Link to="/about">About</Link></li>
                  </ul>
                </nav>

                <div className="social">
                  <ul>
                    <li><a href="https://www.facebook.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="https://www.instagram.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="mailto:info@tripimagine.com"><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <form className="trip-form" onSubmit={this.onSubmit}>
          <div className="form-container">
            <nav>
              <div></div>
              <div>
                <h3>Your Dream Vacation</h3>
              </div>
              <div>
                <button onClick={this.formTrigger}><i className="far fa-times-circle"></i></button>
              </div>
            </nav>
            {success && (
              <div className="content row">
                <div className="alert alert-success">
                  <div><i className="fas fa-check-circle"></i>&nbsp;{success}</div>
                  <div><button onClick={this.onSuccessClose}><i className="far fa-times-circle"></i></button></div>
                </div>
              </div>
            )}
            <div className="content row">
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="trip-form-name" ><i className="fas fa-user"></i></label>
                  <div className="input-container">
                    <input type="text" className={classnames('form-control', {
                      'trip-is-invalid': errors.name
                    })} name="name" placeholder="Your Name*" value={this.state.name} onChange={this.onChange} id="trip-form-name"/>
                    {errors.name && (
                      <small className="trip-invalid-feedback">{errors.name}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="trip-form-email" ><i className="far fa-envelope"></i></label>
                  <div className="input-container">
                    <input type="email" className={classnames('form-control', {
                      'trip-is-invalid': errors.email
                    })} name="email" placeholder="Your Email*" value={this.state.email} onChange={this.onChange} id="trip-form-email"/>
                    {errors.email && (
                      <small className="trip-invalid-feedback">{errors.email}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="trip-form-phone" ><i className="fas fa-mobile-alt"></i></label>
                  <div className="input-container">
                    <input type="text" className={classnames('form-control', {
                      'trip-is-invalid': errors.phone
                    })} name="phone" placeholder="Your Phone*" value={this.state.phone} onChange={this.onChange} id="trip-form-phone"/>
                    {errors.phone && (
                      <small className="trip-invalid-feedback">{errors.phone}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="trip-form-message" ><i className="fas fa-pencil-alt"></i></label>
                  <div className="input-container">
                    <textarea type="text" className={classnames('form-control', {
                      'trip-is-invalid': errors.message
                    })} name="message" value={this.state.message} onChange={this.onChange} placeholder="Your Message*" id="trip-form-message"></textarea>
                    {errors.message && (
                      <small className="trip-invalid-feedback">{errors.message}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="button-wrapper">
                <button onClick={this.onTripFormSubmit}><div>Send&nbsp;</div><div><i className="fab fa-telegram-plane"></i></div></button>
                <div className="secure-lock-container"><img src={lock} alt="Secure Data License" />&nbsp;<small>Secure Private Data</small></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Menu.proptypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(withRouter(Menu));