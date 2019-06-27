import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../common/textfieldgroup';
import TextAreaFieldGroup from '../../common/text-area-field-group';
// import SelectListGroup from '../../common/select-list-group';
import { Button } from '../../common/common-button';
import { manageTrip, getCurrentProfile } from '../../../actions/profileActions';

const initialState = {
  destination: '',
  from: '',
  to: '',
  numberOfPeople: '',
  budget: '',
  message: '',
  manageTrip: {},
  errors: {}
};

class ManageTripSection2 extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onManageTrip = this.onManageTrip.bind(this);
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
    if (nextProps.profile) {
      this.setState({ manageTrip: nextProps.profile.manageTrip });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onManageTrip(e) {
    e.preventDefault();

    const tripData = {
      destination: this.state.destination,
      from: this.state.from,
      to: this.state.to,
      numberOfPeople: this.state.numberOfPeople,
      budget: this.state.budget,
      message: this.state.message,
    };

    this.props.manageTrip(tripData);
  }

  render() {
    const { errors, manageTrip } = this.state;
    return (
      <section className="create-profile-section-2">
        <div className="overlay">

          <form onSubmit={this.onSubmit}>
            <div className="desc">
              <h4>Create or edit your next trip !</h4>
            </div>

            <div className="content row">
              <TextFieldGroup 
                placeholder="What is the destination name*"
                name="destination"
                type="text"
                value={this.state.destination}
                onChange={this.onChange}
                error={errors.destination}
                id="manage-destination-name"
                htmlFor="manage-destination-name"
                icon="airplanemode_active"
              />

              <TextFieldGroup 
                placeholder="Going From*"
                name="from"
                type="text"
                value={this.state.from}
                onChange={this.onChange}
                error={errors.from}
                id="manage-from-date"
                htmlFor="manage-from-date"
                icon="date_range"
                info="Ex: 2019-12-19"
              />

              <TextFieldGroup 
                placeholder="Going To*"
                name="to"
                type="text"
                value={this.state.to}
                onChange={this.onChange}
                error={errors.to}
                id="manage-to-date"
                htmlFor="manage-to-date"
                icon="date_range"
                info="Ex: 2020-01-07"
              />

              <TextFieldGroup 
                placeholder="Number of people going*"
                name="numberOfPeople"
                type="text"
                value={this.state.numberOfPeople}
                onChange={this.onChange}
                error={errors.numberOfPeople}
                id="manage-numberOfPeople"
                htmlFor="manage-numberOfPeople"
                icon="people"
                info="Just a number. Ex: 4"
              />

              <TextFieldGroup 
                placeholder="Estimated Budget"
                name="budget"
                type="text"
                value={this.state.budget}
                onChange={this.onChange}
                error={errors.budget}
                id="manage-budget"
                htmlFor="manage-budget"
                icon="attach_money"
                info="Just the rough estimated number. No text."
              />

              <TextAreaFieldGroup 
                placeholder="Give the travel consultant details on your next trip*"
                name="message"
                value={this.state.message}
                onChange={this.onChange}
                icon="message"
              />

              {manageTrip && <small className="trip-success-feedback">{manageTrip.success} <span>X</span></small>}

              <div className="button-wrapper">
                <Button name="Save" icon="send" onClick={this.onManageTrip} />
              </div>

            </div>
          </form>
          
        </div>
      </section>
    );
  }
}

ManageTripSection2.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  manageTrip: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { manageTrip, getCurrentProfile })(withRouter(ManageTripSection2));
