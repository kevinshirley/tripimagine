import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../../../common/common-button';

class PastTrips extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let hasProfile = this.props.hasProfile;
    // let trips = this.props.profile.profile.trip;
    return (
      <div className="upcoming-trips">
        <div className="no-profile" style={{ display: hasProfile ? 'none' : 'block' }}>
          <h5>You don't have any past trip with us yet</h5>
          <p>Contact a Trip Imagine Consultant now!</p>
          <Button name="Plan Your Dream Vacation" icon="card_travel" />
        </div>

        <div className="has-profile" style={{ display: !hasProfile ? 'none' : 'block' }}>
          {/* {trips.map((trip, i) => {
            let content = (

              <ul key={i} style={{listStyleType: 'none'}}>
                <li>Active: {trip.status}</li>
                <li>Destination: {trip.destination}</li>
                <li>From: {trip.from}</li>
                <li>To: {trip.to}</li>
                <li>Message: {trip.message}</li>
                <li>Budget: {trip.budget}</li>
                <li>Date Received: {trip.dateReceived}</li>
                <li><ButtonUrl name="Go" url="/" /></li>
                <hr />
              </ul>

            );

            return content;
          })} */}
          Soon available
        </div>
      </div>
    );
  }
}

PastTrips.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {})(PastTrips);
