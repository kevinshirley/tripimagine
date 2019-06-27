import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonUrl } from '../../../common/common-button';
// import moment from 'moment';

class PastTrips extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let hasProfile = this.props.hasProfile;
    let trips = this.props.profile.profile.trip;
    return (
      <div className="upcoming-trips">
        <div className="row" style={{ display: hasProfile ? 'none' : 'block' }}>
          <div className="alert alert-warning" >
						<p>You have not yet setup your profile, please add some info before you continue.</p>
						<ButtonUrl name="Manage Profile" url="/dashboard/manage-profile" icon="account_circle" />
					</div>
        </div>

        {trips && 
          <div>
            <div className="has-profile" style={{ display: !(trips.length > 0) ? 'block' : 'none' }}>
              <h5>You don't have any completed trips yet</h5>
              <p>Add a new trip and a Trip Imagine Consultant will contact you soon after!</p>
              <ButtonUrl name="Plan Your Dream Trip" url="/dashboard/manage-trip" icon="card_travel" />
            </div>

            <div className="has-profile" style={{ display: !(trips.length > 0) ? 'none' : 'block' }}>
              {/* {trips && trips.map((trip, i) => {
                let content;
                let momentObj = moment(trip.dateReceived);
                content = (

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
              })} */}
              No Completed Trips!
            </div>
          </div>
        }
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
