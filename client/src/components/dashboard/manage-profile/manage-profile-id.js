import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ManageProfileSection1 from './manage-profile-section-1';
import ManageProfileSection3 from './manage-profile-section-3';

class ManageProfileId extends Component {
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
          <ManageProfileSection3 />
          
        </div>
      </section>
    );
  }
}

ManageProfileId.proptypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ManageProfileId);
