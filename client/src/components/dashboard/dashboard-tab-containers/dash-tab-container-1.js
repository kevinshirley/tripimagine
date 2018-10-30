import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashTabContainer1 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let hasProfile = this.props.hasProfile;
    return (
      <div>
        Profile
        <div className="row" style={{ display: hasProfile ? 'none' : 'block' }}>
          <div className="alert alert-warning" >
            <p>You have not yet setup your profile, please add some info before you continue.</p>
            <Link to="/dashboard/manage-profile">Manage Profile</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DashTabContainer1;
