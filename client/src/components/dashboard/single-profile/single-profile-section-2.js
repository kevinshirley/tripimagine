import React, { Component } from 'react';
import moment from 'moment';
import { Button } from '../../common/common-button';
import {Table, HeadCell, Cell, Row, HeadRow} from '../../common/table';
import isEmpty from '../../../validation/is-empty';

const categoryOptions = [
  { value: 0, label: 'Select a category' },
  { value: 1, label: 'Itinerary' },
  { value: 2, label: 'Financial' },
  { value: 3, label: 'Reservation' },
  { value: 4, label: 'Booking' },
  { value: 5, label: 'Other' }
];

class SingleProfileSection2 extends Component {
  constructor() {
    super();

    this.state = {
      displayUserTrips: false,
      displaySingleTrip: false,
      displaySocial: false,
      tripSelected: '',
    }
  }

  displayUserTrips(trips) {
    let mainContent;
    mainContent = (trips && trips.map((trip,i) => {
      let content;
      let momentObj = moment(trip.dateReceived);
      let dateReceived = momentObj.format('llll');
      content = (
        <Row key={i}>
          <Cell>{i+1}</Cell>
          <Cell>{trip.status}</Cell>
          <Cell>{trip.destination}</Cell>
          <Cell>{trip.from+' - '+trip.to}</Cell>
          <Cell>{dateReceived}</Cell>
          <Cell><Button name="Details" icon="arrow_forward_ios" onClick={() => this.setState({ displaySingleTrip: true, tripSelected: trip._id })} /></Cell>
        </Row>
      );
      return content;
    }));
    return mainContent;
  }

  displayTripFiles(files) {
    let mainContent;
    mainContent = (files && files.map((file,i) => {
      let content;
      let dateReceived = moment(file.dateReceived);
      dateReceived = dateReceived.format('llll');
      let cat;
      cat = categoryOptions.filter(obj => file.category === obj.value);
      content = (
        <Row key={i}>
          <Cell>{file.name}</Cell>
          <Cell>{cat[0].label}</Cell>
          <Cell>{dateReceived}</Cell>
          <Cell><Button name="Upload" icon="cloud_upload" /></Cell>
          <Cell><Button name="Download" icon="get_app" /></Cell>
        </Row>
      );
      return content;
    }));
    return mainContent;
  }

  displayFiles(files) {
    let mainContent;
    mainContent = (!isEmpty(files) ? files.map((f, i) => {
      let content;
      let cat;
      cat = categoryOptions.filter(obj => f.category === obj.value);
      let dateTime = moment(f.dateRegistered);
      dateTime = dateTime.startOf('hour').fromNow();
      content = (
  
        <Row key={i}>
          <Cell>{f.name}</Cell>
          <Cell>{cat[0].label}</Cell>
          <Cell>{dateTime}</Cell>
          <Cell><Button name="Download" icon="get_app" /></Cell>
        </Row>

      );
      return content;
    }) : <Row><Cell>There's no files uploaded yet</Cell><Cell>{/*empty*/}</Cell><Cell>{/*empty*/}</Cell><Cell>{/*empty*/}</Cell></Row>);
    return mainContent;
  }

  render() {
    let profiles = this.props.profiles;
    let profileID = this.props.profileID;
    let userFiles = this.props.userFiles;
    return (
      <section className="single-profile-section-2">
        <div className="overlay">
          {profiles && profiles.map((profile, i) => {
            let profileDate = moment(profile.dateReceived);
            let userDate = moment(profile.user.date);
            let content;
            if (profile._id === profileID) {
              content = (

                <div key={i} className="single-trip">

                  <ul className="trip-details">
                    <li><b>Name:</b> {profile.user.name}</li>
                    <li><b>Email:</b> {profile.user.email}</li>
                    <li><b>Handle:</b> {profile.handle}</li>
                    <li><b>Gender:</b> {profile.gender}</li>
                    <li><b>Phone Number:</b> {profile.phoneNumber}</li>
                    <li><b>Timezone:</b> {profile.timezone}</li>
                    <li><b>Notifications via text:</b> {profile.notificationViaText ? 'Enabled' : 'Disabled'}</li>
                    <li><b>Profile Created:</b> {profileDate.format('LLLL')}</li>
                    <li><b>Account Created:</b> {userDate.format('LLLL')}</li>
                  </ul>

                  {profile.social &&
                    <div className="socialsContainer">
                      <div className="input-wrapper form-group">
                        <div className="inner-wrap">
                          <div className="displayUserTrips">
                            <button onClick={() => {
                              this.setState(prevState => ({
                                displaySocial: !prevState.displaySocial
                              }))
                            }}>
                              {!this.state.displaySocial ? 'Show': 'Hide'} Socials
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul className="trip-details" style={{ display: this.state.displaySocial ? 'block' : 'none' }}>
                        {profile.social.facebook && <li><b>Facebook:</b> {profile.social.facebook}</li>}
                        {profile.social.instagram && <li><b>Instagram:</b> {profile.social.instagram}</li>}
                        {profile.social.twitter && <li><b>Twitter:</b> {profile.social.twitter}</li>}
                        {profile.social.linkedin && <li><b>LinkedIn:</b> {profile.social.linkedin}</li>}
                      </ul>
                    </div>
                  }

                  <div className="input-wrapper form-group">
                    <div className="inner-wrap">
                      <div className="displayUserTrips">
                        <button onClick={() => {
                          this.setState(prevState => ({
                            displayUserTrips: !prevState.displayUserTrips
                          }))
                        }}>
                          {!this.state.displayUserTrips ? 'Show': 'Hide'} Trips
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="trips-container" style={{ display: this.state.displayUserTrips ? 'block' : 'none' }}>
                    <div className="user-trips" style={{ display: !this.state.displaySingleTrip ? 'block' : 'none' }}>
                      <Table>
                        <HeadRow>
                          <HeadCell></HeadCell>
                          <HeadCell></HeadCell>
                          <HeadCell></HeadCell>
                          <HeadCell>{profile.user.name}'s Trips</HeadCell>
                          <HeadCell></HeadCell>
                          <HeadCell></HeadCell>
                        </HeadRow>
                        <HeadRow>
                          <HeadCell>#</HeadCell>
                          <HeadCell>Status</HeadCell>
                          <HeadCell>Destination</HeadCell>
                          <HeadCell>Travel Dates</HeadCell>
                          <HeadCell>Date Received</HeadCell>
                          <HeadCell>Option</HeadCell>
                        </HeadRow>
                        {profiles && profiles.map(profile => {
                          let content;
                          if (profile._id === profileID) {
                            let trips = profile.trip;
                            content = this.displayUserTrips(trips);
                          }
                          return content;
                        })}
                      </Table>
                    </div>

                    <div className="user-trip" style={{ display: this.state.displaySingleTrip ? 'block' : 'none' }}>
                      {profiles && profiles.map(profile => {
                        let content;
                        if (profile._id === profileID) {
                          let trips = profile.trip;
                          content = (trips && trips.map(trip => {
                            let single;
                            let momentObj = moment(trip.dateReceived);
                            let dateReceived = momentObj.format('llll');
                            if (trip._id === this.state.tripSelected) {
                                single = (
                                  <div className="content">
                                    <h3><b>{'Trip to '+trip.destination}</b></h3>
                                    <ul key={i} style={{ listStyleType: 'none' }}>
                                      <li><b>Status:</b> {trip.status}</li>
                                      <li><b>Destination:</b> {trip.destination}</li>
                                      <li><b>Travel Dates:</b> {trip.from+' - '+trip.to}</li>
                                      <li><b>Number of People:</b> {trip.numberOfPeople}</li>
                                      <li><b>Budget:</b> {' $'+trip.budget}</li>
                                      <li><b>Message:</b> {trip.message}</li>
                                      <li><b>Date Received:</b> {dateReceived}</li>
                                      <li><Button name="Back" icon="keyboard_return" onClick={() => this.setState({ displaySingleTrip: false, tripSelected: '' })} /></li>
                                    </ul>
                                    <Table>
                                      <HeadRow>
                                        <HeadCell></HeadCell>
                                        <HeadCell></HeadCell>
                                        <HeadCell>Files</HeadCell>
                                        <HeadCell></HeadCell>
                                        <HeadCell></HeadCell>
                                      </HeadRow>
                                      <HeadRow>
                                        <HeadCell>Name</HeadCell>
                                        <HeadCell>Category</HeadCell>
                                        <HeadCell>Date Received</HeadCell>
                                        <HeadCell>Option</HeadCell>
                                        <HeadCell>Option</HeadCell>
                                      </HeadRow>
                                      <tbody>
                                        {userFiles && userFiles.map(file => {
                                          let files = [];
                                          let content;
                                          if (file.tripId === trip._id) {
                                            files.push(file);
                                            content = this.displayTripFiles(files);
                                          }
                                          return content;
                                        })}
                                      </tbody>
                                    </Table>
                                  </div>
                                );
                            }
                            return single;
                          }));
                        }
                        return content;
                      })}
                    </div>
                  </div>

                </div>
  
              );
            }

            return content;
          })}
        </div>
      </section>
    );
  }
}

export default SingleProfileSection2;