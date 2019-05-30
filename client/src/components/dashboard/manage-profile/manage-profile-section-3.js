import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../common/textfieldgroup';
import SelectListGroup from '../../common/select-list-group';
import { Button } from '../../common/common-button';
import { manageProfile, getCurrentProfile, resetManageProfile } from '../../../actions/profileActions';
import { manageUser, resetManageUser } from '../../../actions/authActions';

const initialState = {
  displaySocialInputs: false,
  userId: '',
  name: '',
  email: '',
  handle: '',
  gender: '',
  phoneNumber: '',
  notificationViaText: false,
  timezone: '',
  facebook: '',
  instagram: '',
  twitter: '',
  linkedin: '',
  errors: {}
};

class ManageProfileSection3 extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onUpdateProfile = this.onUpdateProfile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillUnmount() {
    this.props.resetManageProfile();
    this.props.resetManageUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile.profile !== prevProps.profile.profile) {
      let profile = this.props.profile.profile;
      let userId = profile.user._id;
      let facebook = '';
      let instagram = '';
      let twitter = '';
      let linkedin = '';
      if (profile.social) {
        facebook = (profile.social.facebook ? profile.social.facebook : '');
        instagram = (profile.social.instagram ? profile.social.instagram : '');
        twitter = (profile.social.twitter ? profile.social.twitter : '');
        linkedin = (profile.social.linkedin ? profile.social.linkedin : '');
      }
      this.setState({
        userId: userId,
        name: profile.user.name,
        email: profile.user.email,
        handle: profile.handle,
        phoneNumber: profile.phoneNumber,
        gender: profile.gender,
        timezone: profile.timezone,
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        linkedin: linkedin,
      });
    }
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

  onUpdateProfile(e) {
    e.preventDefault();

    const userData = {
      id: this.state.userId,
      name: this.state.name,
      email: this.state.email,
    };

    const profileData = {
      'handle': this.state.handle,
      'gender': this.state.gender,
      'phoneNumber': this.state.phoneNumber,
      'timezone': this.state.timezone,
      'notificationViaText': this.state.notificationViaText,
      'facebook': this.state.facebook,
      'instagram': this.state.instagram,
      'twitter': this.state.twitter,
      'linkedin': this.state.linkedin,
    };

    this.props.manageProfile(profileData);
    this.props.manageUser(userData);
  }

  render() {
    const { errors } = this.state;
    const { profile, auth } = this.props;

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
                placeholder="Your Profile Name*"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.onChange}
                error={errors.name}
                id="create-profile-name"
                htmlFor="create-profile-name"
                icon="account_box"
                info="Your name on the account"
              />

              <TextFieldGroup 
                placeholder="Your Profile Email*"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                id="create-profile-email"
                htmlFor="create-profile-email"
                icon="email"
                info="This is the email for login also"
              />

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

              <TextFieldGroup 
                placeholder="Your Phone Number*"
                name="phoneNumber"
                type="text"
                value={this.state.phoneNumber}
                onChange={this.onChange}
                error={errors.phoneNumber}
                id="manage-phone-number"
                htmlFor="manage-phone-number"
                icon="phone_iphone"
                info="Mobile phone number prefered"
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

              {auth.manageUser && <span style={{color: 'green', marginBottom: '5px'}}>{auth.manageUser.success}</span>}
              {profile.manageProfile && <span style={{color: 'green', marginBottom: '15px'}}>{profile.manageProfile.success}</span>}

              <div className="button-wrapper">
                <Button name="Save" icon="send" onClick={this.onUpdateProfile} />
              </div>

            </div>
          </form>
          
        </div>
      </section>
    );
  }
}

ManageProfileSection3.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  manageProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  manageUser: PropTypes.func.isRequired,
  resetManageProfile: PropTypes.func.isRequired,
  resetManageUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { manageProfile, getCurrentProfile, manageUser, resetManageProfile, resetManageUser })(withRouter(ManageProfileSection3));
