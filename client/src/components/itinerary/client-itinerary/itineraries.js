import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItinerarySection1 from '../itinerary-section-1';
import ClientItinerarySection2 from './client-itinerary-section-2';
import ItinerarySection3 from '../itinerary-section-3';
import { getClientItineraries } from '../../../actions/itineraryActions';

class Itinerary extends Component {
	componentDidMount() {
		this.props.getClientItineraries();
	}

  render() {
		const { clientItineraries } = this.props.itinerary;

		return (
			<section className="itinerary">
				<div className="overlay">

					<ItinerarySection1 />
          <ClientItinerarySection2 itineraries={clientItineraries} />
          <ItinerarySection3 />
				
				</div>
			</section>
		);
	}
}

Itinerary.proptypes = {
  getClientItineraries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { getClientItineraries })(Itinerary);