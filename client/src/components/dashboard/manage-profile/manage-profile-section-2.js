import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../common/textfieldgroup';
import SelectListGroup from '../../common/select-list-group';
import { Button } from '../../common/common-button';
import { createProfile, getCurrentProfile } from '../../../actions/profileActions';

const initialState = {
  displaySocialInputs: false,
  handle: '',
  gender: '',
  notificationViaText: false,
  timezone: '',
  facebook: '',
  instagram: '',
  twitter: '',
  linkedin: '',
  errors: {}
};

class ManageProfileSection2 extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onCreateProfile = this.onCreateProfile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onCreateProfile(e) {
    e.preventDefault();

    const profileData = {
      'handle': this.state.handle,
      'gender': this.state.gender,
      'timezone': this.state.timezone,
      'notificationViaText': this.state.notificationViaText,
      'facebook': this.state.facebook,
      'instagram': this.state.instagram,
      'twitter': this.state.twitter,
      'linkedin': this.state.linkedin,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    const genderOptions = [
      { value: 0, label: 'Select a gender' },
      { value: 1, label: 'Male' },
      { value: 2, label: 'Female' },
      { value: 3, label: 'Other' }
    ];

    const timezoneOptions = [
      { value: 0, label: 'Select your timezone' },
      { value: 1, label: 'Eastern Toronto/New York' },
      { value: 2, label: 'Western Vancouver/Los Angeles' },
      { value: 3, label: 'MidWest Chicago/Edmonton' },
    ];

    return (
      <section className="create-profile-section-2">
        <div className="overlay">

          <form onSubmit={this.onSubmit}>
            <div className="desc">
              <h4>Let's add some info to complete your profile !</h4>
            </div>

            <div className="content row">
              <TextFieldGroup 
                placeholder="Your Profile Handle*"
                name="handle"
                type="text"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                id="create-profile-handle"
                htmlFor="create-profile-handle"
                icon="link"
                info="The URL to access your profile"
              />

              <SelectListGroup 
                name="gender"
                value={this.state.gender}
                options={genderOptions}
                onChange={this.onChange}
                error={errors.gender}
                id="login-form-gender"
                htmlFor="login-form-gender"
                icon="people"
              />

              <SelectListGroup 
                name="timezone"
                value={this.state.timezone}
                options={timezoneOptions}
                onChange={this.onChange}
                error={errors.timezone}
                id="login-form-timezone"
                htmlFor="login-form-timezone"
                icon="place"
              />

              <div className="input-wrapper form-group">
                <div className="inner-wrap">
                  <div className="displaySocialInputs">
                    <button onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }))
                    }}>
                      Add Social Media Links
                    </button>&nbsp;&nbsp;
                    <span>Optional</span>
                  </div>
                </div>
              </div>
                      
              <div className="socialInputs" style={{ display: this.state.displaySocialInputs ? 'block' : 'none' }}>
                <TextFieldGroup 
                  placeholder="https://www.facebook.com/yourprofile"
                  name="facebook"
                  type="text"
                  value={this.state.facebook}
                  onChange={this.onChange}
                  error={errors.facebook}
                  id="create-profile-facebook"
                  htmlFor="create-profile-facebook"
                  iconClass="fab fa-facebook-square"
                />

                <TextFieldGroup 
                  placeholder="https://www.instagram.com/yourprofile"
                  name="instagram"
                  type="text"
                  value={this.state.instagram}
                  onChange={this.onChange}
                  error={errors.instagram}
                  id="create-profile-instagram"
                  htmlFor="create-profile-instagram"
                  iconClass="fab fa-instagram"
                />

                <TextFieldGroup 
                  placeholder="https://www.twitter.com/yourprofile"
                  name="twitter"
                  type="text"
                  value={this.state.twitter}
                  onChange={this.onChange}
                  error={errors.twitter}
                  id="create-profile-twitter"
                  htmlFor="create-profile-twitter"
                  iconClass="fab fa-twitter-square"
                />

                <TextFieldGroup 
                  placeholder="https://www.linkedin.com/in/yourprofile"
                  name="linkedin"
                  type="text"
                  value={this.state.linkedin}
                  onChange={this.onChange}
                  error={errors.linkedin}
                  id="create-profile-linkedin"
                  htmlFor="create-profile-linkedin"
                  iconClass="fab fa-linkedin"
                />
              </div>

              <div className="button-wrapper">
                <Button name="Save" icon="send" onClick={this.onCreateProfile} />
              </div>

            </div>
          </form>
          
        </div>
      </section>
    );
  }
}

ManageProfileSection2.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(ManageProfileSection2));
