import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleProfileSection1 from './single-profile-section-1';
import SingleProfileSection2 from './single-profile-section-2';
import { getAllProfiles } from '../../../actions/profileActions';
import { getFiles } from '../../../actions/fileActions';

class SingleProfile extends Component {
  getUserId(profiles, paramId) {
    if (profiles) {
      let userId;
      let userProfile = profiles.filter(profile => profile._id === paramId);
      userProfile.map(profile => userId = profile.user._id);
      this.props.getFiles(userId);
    } 
  }

  componentWillReceiveProps(nextProps) {
    this.getUserId(nextProps.profile.profiles, nextProps.match.params.id);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    // in case of reload
    this.props.getAllProfiles();
    // this.getUserId(this.props.profile.profiles, this.props.match.params.id);
  }
  
  render() {
    let profileID = this.props.match.params.id;
    let profiles = this.props.profile.profiles;
    let userFiles = this.props.file.userFiles;
    return (
      <section className="single-profile">
        <div className="overlay">

          <SingleProfileSection1 profileID={profileID} profiles={profiles} />
          <SingleProfileSection2 profileID={profileID} profiles={profiles} userFiles={userFiles} />
          
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
