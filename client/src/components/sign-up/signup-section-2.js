import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
// connect: connecting redux to this component. (a container is simply a react component that works with redux, might find in some projects folders of containers, not this one);
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import lock from '../../assets/img/data-privacy-lock.png';

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  success: '',
  errors: {}
};

class SignupSection2 extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.resetFormState = this.resetFormState.bind(this);
    this.onNewUserSubmit = this.onNewUserSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  resetFormState() {
    this.setState(initialState);
  }

  onNewUserSubmit(e) {
    e.preventDefault();

    const newUser = {
      'name': this.state.name,
      'email': this.state.email,
      'password': this.state.password,
      'password2': this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="signup-section-2">
        
        <form className="register-form" onSubmit={this.onSubmit}>
          <div className="form-container">
            <div className="title">
              <h4>Create your Trip Imagine account</h4>
            </div>
            <div className="content row">
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="register-form-name" ><i className="fas fa-user"></i></label>
                  <div className="input-container">
                    <input type="text" className={classnames('form-control', {
                      'trip-is-invalid': errors.name
                    })} name="name" placeholder="Your Name*" value={this.state.name} onChange={this.onChange} id="register-form-name"/>
                    {errors.name && (
                      <small className="trip-invalid-feedback">{errors.name}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="register-form-email" ><i className="far fa-envelope"></i></label>
                  <div className="input-container">
                    <input type="email" className={classnames('form-control', {
                      'trip-is-invalid': errors.email
                    })} name="email" placeholder="Your Email*" value={this.state.email} onChange={this.onChange} id="register-form-email"/>
                    {errors.email && (
                      <small className="trip-invalid-feedback">{errors.email}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="register-form-password" ><i className="fas fa-lock"></i></label>
                  <div className="input-container">
                    <input type="password" className={classnames('form-control', {
                      'trip-is-invalid': errors.password
                    })} name="password" placeholder="Your Password*" value={this.state.password} onChange={this.onChange} id="register-form-password"/>
                    {errors.password && (
                      <small className="trip-invalid-feedback">{errors.password}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <label htmlFor="register-form-password2" ><i className="fas fa-lock"></i></label>
                  <div className="input-container">
                    <input type="password" className={classnames('form-control', {
                      'trip-is-invalid': errors.password2
                    })} name="password2" placeholder="Confirm your Password*" value={this.state.password2} onChange={this.onChange} id="register-form-password2"/>
                    {errors.password2 && (
                      <small className="trip-invalid-feedback">{errors.password2}</small>
                    )}
                  </div>
                </div>
              </div>
              <div className="button-wrapper">
                <button onClick={this.onNewUserSubmit}><div>Sign up</div><div><i className="fab fa-telegram-plane"></i></div></button>
                <div className="secure-lock-container"><img src={lock} alt="Secure Data License" />&nbsp;<small>Secure Private Data</small></div>
              </div>
            </div>
          </div>
        </form>
          
      </section>
    );
  }
}

SignupSection2.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

// second param of connect is an obj where we can map our actions
export default connect(mapStateToProps, { registerUser })(withRouter(SignupSection2));
