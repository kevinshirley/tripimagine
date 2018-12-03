import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleProfileSection1 from './single-profile-section-1';
import SingleProfileSection2 from './single-profile-section-2';
import { getAllProfiles } from '../../../actions/profileActions';
import { getFiles } from '../../../actions/fileActions';

class SingleProfile extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    // in case of reload
    this.props.getAllProfiles();
    console.log('user id param',this.props.match.params.id);
    this.props.getFiles(this.props.match.params.id);
    console.log(this.props.file);
  }

  render() {
    let profileID = this.props.match.params.id;
    let profiles = this.props.profile.profiles;
    return (
      <section className="single-profile">
        <div className="overlay">

          <SingleProfileSection1 profileID={profileID} profiles={profiles} />
          <SingleProfileSection2 profileID={profileID} profiles={profiles} />
          
        </div>
      </section>
    );
  }
}

SingleProfile.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired,
  getFiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  file: state.file,
});

export default connect(mapStateToProps, { getAllProfiles, getFiles })(SingleProfile);
