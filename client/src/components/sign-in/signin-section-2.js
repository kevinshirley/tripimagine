import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/textfieldgroup';

import lock from '../../assets/img/data-privacy-lock.png';

const initialState = {
  email: '',
  password: '',
  success: '',
  errors: {}
};

class SigninSection2 extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onUserLogin = this.onUserLogin.bind(this);
    this.resetFormState = this.resetFormState.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  resetFormState() {
    this.setState(initialState);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onUserLogin(e) {
    e.preventDefault();

    const userData = {
      'email': this.state.email,
      'password': this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="signin-section-2">

        <form className="login-form" onSubmit={this.onSubmit}>
          <div className="form-container">
            <div className="title">
              <h4>Sign in to your Trip Imagine account</h4>
            </div>
            <div className="content row">
              <TextFieldGroup 
                placeholder="Your Email*"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                id="login-form-email"
                htmlFor="login-form-email"
                icon="email"
              />
              <TextFieldGroup 
                placeholder="Your Password*"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
                id="login-form-password"
                htmlFor="login-form-password"
                icon="lock"
              />
              <div className="button-wrapper">
                <button onClick={this.onUserLogin}><div>Log in</div><div><i className="fab fa-telegram-plane"></i></div></button>
                <div className="secure-lock-container"><img src={lock} alt="Secure Data License" />&nbsp;<small>Secure Private Data</small></div>
              </div>
            </div>
          </div>
        </form>
          
      </section>
    );
  }
}

SigninSection2.proptypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(SigninSection2);
