import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardMainContent from './dashboard-main-content';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class DashboardSection2 extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    this.props.getCurrentProfile();
    this.setState({ user: this.props.auth.user });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      this.setState({ user: this.props.auth.user });
    }
  }

  render() {
    const user = this.state.user;
    const { profile, loading } = this.props.profile;

    let dashboardContent, hasProfile;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        hasProfile = true;
      } else {
        hasProfile = false;
      }
      dashboardContent = <DashboardMainContent hasProfile={hasProfile} user={user} isAdmin={user.isAdmin} />;
    }

    return (
      <section className="dashboard-section-2">
        <div className="overlay">

          {dashboardContent}
          
        </div>
      </section>
    );
  }
}

DashboardSection2.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(DashboardSection2);
