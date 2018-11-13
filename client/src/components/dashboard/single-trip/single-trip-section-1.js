import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';

class SingleTripSection1 extends Component {
  render() {
    let profile = this.props.profile;
    let tripID = this.props.tripID;
    return (
      <section className="header-section">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              {profile && profile.trip.map((trip,i) => {
                let content;
                if (trip._id === tripID) {
                  content = (

                    <h2 key={i}>Trip to {trip.destination}</h2>
      
                  );
                }

                return content;
              })}
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default SingleTripSection1;