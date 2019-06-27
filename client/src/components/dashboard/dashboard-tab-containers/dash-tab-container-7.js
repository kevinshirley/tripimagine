import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../../actions/authActions';
import { clearCurrentProfile } from '../../../actions/profileActions';
import { Button } from '../../common/common-button';

class DashTabContainer7 extends Component {
  constructor() {
    super();
    this.state = {};

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser(this.props.history);
  }

  render() {
    return (
      <div>
        <span>We waiting for you to come back!</span>
        <br/>
        <br/>
        <Button name="Log Out" icon="exit_to_app" onClick={this.onLogout} />
      </div>
    );
  }
}

DashTabContainer7.proptypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(withRouter(DashTabContainer7));
