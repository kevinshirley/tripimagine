import React, { Component } from 'react';
import ItinerarySection1 from './itinerary-section-1';
import ItinerarySection2 from './itinerary-section-2';
import ItinerarySection3 from './itinerary-section-3';

class Itinerary extends Component {
  render() {
		return (
			<section className="itinerary">
				<div className="overlay">

					<ItinerarySection1 />
          <ItinerarySection2 />
          <ItinerarySection3 />
				
				</div>
			</section>
		);
	}
}

export default Itinerary;