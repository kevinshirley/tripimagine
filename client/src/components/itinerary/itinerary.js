import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItinerarySection1 from './itinerary-section-1';
import ItinerarySection2 from './itinerary-section-2';
import ItinerarySection3 from './itinerary-section-3';
import { getItineraries } from '../../actions/itineraryActions';

class Itinerary extends Component {
	componentDidMount() {
		document.title = 'Itinerary | Trip Imagine';
		this.props.getItineraries();
	}

  render() {
		const { itineraries } = this.props.itinerary;

		return (
			<section className="itinerary">
				<div className="overlay">

					<ItinerarySection1 />
          <ItinerarySection2 itineraries={itineraries} />
          <ItinerarySection3 />
				
				</div>
			</section>
		);
	}
}

Itinerary.proptypes = {
  getItineraries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { getItineraries })(Itinerary);