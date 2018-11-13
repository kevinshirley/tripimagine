import React, { Component } from 'react';
import moment from 'moment';

class SingleTripSection2 extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    let profile = this.props.profile;
    let tripID = this.props.tripID;
    return (
      <section className="single-trip-section-2">
        <div className="overlay">
          {profile && profile.trip.map((trip, i) => {
            let momentObj = moment(trip.dateReceived);
            let content;
            if (trip._id === tripID) {
              content = (

                <div key={i} className="single-trip">

                  <div>
                    files
                  </div>

                  <ul>
                    <li><b>Status:</b> {trip.status}</li>
                    <li><b>Destination:</b> {trip.destination}</li>
                    <li><b>From:</b> {trip.from}</li>
                    <li><b>To:</b> {trip.to}</li>
                    <li><b>Message:</b> {trip.message}</li>
                    <li><b>Budget:</b> {trip.budget}</li>
                    <li><b>Date Received:</b> {momentObj.format('LLLL')}</li>
                  </ul>

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

export default SingleTripSection2;