import React, { Component } from 'react';
import { ButtonUrl } from '../../common/common-button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const genderOptions = [
  { value: 0, label: 'Select a gender' },
  { value: 1, label: 'Male' },
  { value: 2, label: 'Female' },
  { value: 3, label: 'Other' }
];

const timezoneOptions = [
  { value: 0, label: 'Select your timezone' },
  { value: 1, label: 'Eastern Toronto/New York' },
  { value: 2, label: 'Western Vancouver/Los Angeles' },
  { value: 3, label: 'MidWest Chicago/Edmonton' },
];

class DashTabContainer1 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let hasProfile = this.props.hasProfile;
    let name = this.props.name;
    let profile = this.props.profile.profile;
    let gender = genderOptions.filter(obj => Number(profile.gender) === obj.value);
    if (gender[0]) {
      gender = gender[0].label;
    }
    let timezone = timezoneOptions.filter(obj => Number(profile.timezone) === obj.value);
    if(timezone[0]) {
      timezone = timezone[0].label;
    }
    let isAdmin;
    if (profile.user) {
      isAdmin = profile.user.isAdmin;
    }
    return (
      <div className="dash-tab-container-1">
        <div className="user-info" style={{ display: !hasProfile ? 'none' : 'block' }}>
          <span>Profile</span>
          <br />
          <h2>{name}</h2>
          <small className="user-info-btns">
            <ButtonUrl name="Edit Profile" url="/dashboard/manage-profile" icon="account_circle" />
            <ButtonUrl name="Add a Trip" url="/dashboard/manage-trip" icon="card_travel" />
          </small>
        </div>

        {profile.trip && 
        <div className="trip-details">
          <small>Trips</small>
          <br/>
          <p><b>Number of Trips:</b> { profile.trip.length } planned</p>
        </div>
        }

        <div className="profile-details" style={{ display: !hasProfile ? 'none' : 'block' }}>
          <small>Profile</small>
          <br/>
          <p><b>Type:</b> { isAdmin ? 'Administrator' : 'Traveller' }</p>
          <p><b>Handle:</b> { profile.handle }</p>
          <p><b>Phone Number:</b> { profile.phoneNumber }</p>
          <p><b>Gender:</b> { gender }</p>
          <p><b>Timezone:</b> { timezone }</p>
        </div>

        {profile.social && 
        <div className="social-details">
          <small>Socials</small>
          <br/>
          {profile.social.facebook && <p><b>Facebook:</b> { profile.social.facebook }</p>}
          {profile.social.instagram && <p><b>Instagram:</b> { profile.social.instagram }</p>}
          {profile.social.twitter && <p><b>Twitter:</b> { profile.social.twitter }</p>}
          {profile.social.linkedin && <p><b>LinkedIn:</b> { profile.social.linkedin }</p>}
        </div>
        }

        <br />
        {/* no profile alert */}
        <div className="row" style={{ display: hasProfile ? 'none' : 'block' }}>
          <div className="alert alert-warning" >
            <p>You have not yet setup your profile, please add some info before you continue.</p>
            <ButtonUrl name="Manage Profile" url="/dashboard/manage-profile" icon="account_circle" />
          </div>
        </div>
      </div>
    );
  }
}

DashTabContainer1.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {})(DashTabContainer1);
