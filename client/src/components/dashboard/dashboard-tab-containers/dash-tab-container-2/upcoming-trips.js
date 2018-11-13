import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonUrl } from '../../../common/common-button';
import { Button } from '../../../common/common-button';
import moment from 'moment';

class UpcomingTrips extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let hasProfile = this.props.hasProfile;
    let trips = this.props.profile.profile.trip;
    return (
      <div className="upcoming-trips">
        <div className="no-profile" style={{ display: hasProfile ? 'none' : 'block' }}>
          <h5>You don't have any planned trips yet</h5>
          <p>Contact a Trip Imagine Consultant now!</p>
          <Button name="Plan Your Dream Vacation" icon="card_travel" />
        </div>

        <div className="has-profile" style={{ display: !hasProfile ? 'none' : 'block' }}>
          {trips && trips.map((trip, i) => {
            let momentObj = moment(trip.dateReceived);
            let content = (

              <ul key={i}>
                <li><b>Destination:</b> {trip.destination}</li>
                <li><b>From:</b> {trip.from}</li>
                <li><b>To:</b> {trip.to}</li>
                <li><b>Date Received:</b> {momentObj.format('LLLL')}</li>
                <li><ButtonUrl name="Trip Details" icon="card_travel" url={'/dashboard/trip/' + trip._id} /></li>
                <hr />
              </ul>

            );

            return content;
          })}
        </div>
      </div>
    );
  }
}

UpcomingTrips.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {})(UpcomingTrips);
