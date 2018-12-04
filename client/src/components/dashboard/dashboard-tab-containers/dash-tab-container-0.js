import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonUrl } from '../../common/common-button';

class DashTabContainer0 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
		let hasProfile = this.props.hasProfile;
		let name = this.props.name;
    return (
      <div>
				<h5>Hi <Link to="/">{name}</Link> !<br/><br/> <small>Choose one of the tab menu to get started.</small></h5>
				<br/>
				<div className="row" style={{ display: hasProfile ? 'none' : 'block' }}>
					<div className="alert alert-warning" >
						<p>You have not yet setup your profile, please add some info before you continue.</p>
						<ButtonUrl name="Manage Profile" url="/dashboard/manage-profile" icon="account_circle" />
					</div>
				</div>
				<div className="row">
					<div className="alert alert-info">
						<p>You can build your next trip with any tour activities in a destination of your like. Our travel consultants are here to guide you along the process.</p>
						<ButtonUrl name="Add a Trip" url="/dashboard/manage-trip" icon="card_travel" />
					</div>
				</div>
      </div>
    );
  }
}

export default DashTabContainer0;
