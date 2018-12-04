import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ManageTripSection1 from './manage-trip-section-1';
import ManageTripSection2 from './manage-trip-section-2';

class ManageTrip extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <section className="create-profile">
        <div className="overlay">

          <ManageTripSection1 />
          <ManageTripSection2 />
          
        </div>
      </section>
    );
  }
}

ManageTrip.proptypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ManageTrip);
