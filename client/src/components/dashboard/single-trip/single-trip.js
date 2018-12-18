import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleTripSection1 from './single-trip-section-1';
import SingleTripSection2 from './single-trip-section-2';
import { getCurrentProfile } from '../../../actions/profileActions';

class SingleTrip extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    // in case of reload
    this.props.getCurrentProfile();
  }

  render() {
    let tripID = this.props.match.params.id;
    let profile = this.props.profile.profile;
    return (
      <section className="single-trip">
        <div className="overlay">

          <SingleTripSection1 tripID={tripID} profile={profile} />
          <SingleTripSection2 tripID={tripID} profile={profile} />
          
        </div>
      </section>
    );
  }
}

SingleTrip.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(SingleTrip);
