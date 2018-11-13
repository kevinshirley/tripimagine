import React, { Component } from 'react';
import { ButtonUrl } from '../../common/common-button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DashTabContainer1 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let hasProfile = this.props.hasProfile;
    let name = this.props.name;
    let profile = this.props.profile.profile;
    return (
      <div className="dash-tab-container-1">
        <span>Profile</span>
        <br />
        <div className="user-info" style={{ display: !hasProfile ? 'none' : 'block' }}>
          <h2>{name}</h2>
          <small className="user-info-btns">
            <ButtonUrl name="Edit Profile" url="/dashboard/manage-profile" icon="account_circle" />
            <ButtonUrl name="My Trips" url="/dashboard/trips" icon="card_travel" />
          </small>
        </div>

        {profile.trip && 
        <div className="trip-details">
          <small>Trips</small>
          <p>Number of Trips: { profile.trip.length } planned</p>
        </div>
        }

        <div className="profile-details" style={{ display: !hasProfile ? 'none' : 'block' }}>
          <small>Profile</small>
          <p>Gender: { profile.gender }</p>
          <p>Handle: { profile.handle }</p>
          <p>Timezone: { profile.timezone }</p>
        </div>

        {profile.social && 
        <div className="social-details">
          <small>Socials</small>
          {profile.social.facebook && <p>Facebook: { profile.social.facebbook }</p>}
          {profile.social.instagram && <p>Instagram: { profile.social.instagram }</p>}
          {profile.social.twitter && <p>Twitter: { profile.social.twitter }</p>}
          {profile.social.linkedin && <p>LinkedIn: { profile.social.linkedin }</p>}
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
