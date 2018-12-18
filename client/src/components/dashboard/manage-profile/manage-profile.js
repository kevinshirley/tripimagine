import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ManageProfileSection1 from './manage-profile-section-1';
import ManageProfileSection2 from './manage-profile-section-2';

class ManageProfile extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <section className="create-profile">
        <div className="overlay">

          <ManageProfileSection1 />
          <ManageProfileSection2 />
          
        </div>
      </section>
    );
  }
}

ManageProfile.proptypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ManageProfile);
