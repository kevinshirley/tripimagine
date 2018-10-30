import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DashboardSection1 extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <section className="contact-section-1">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>Dashboard</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

DashboardSection1.proptypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(DashboardSection1);
