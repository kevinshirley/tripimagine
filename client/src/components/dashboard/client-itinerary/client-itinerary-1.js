import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class ClientItinerary1 extends Component {
  render() {
		return (
			<section className="header-section">
        <div className="overlay">

          <div className="title-container">
            <div className="content">
              <Fade bottom><h2>Client Itinerary</h2></Fade>
            </div>
          </div>
          
        </div>
      </section>
		);
	}
}

export default ClientItinerary1;