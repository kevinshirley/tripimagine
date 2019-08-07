import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

import { selectedItinerary } from '../../actions/itineraryActions';

class ItinerarySection2 extends Component {
	render() {
		const { itineraries } = this.props;

		return (
			<section className="itinerary-section-2">
				<div className="overlay">

					<div className="itinerary-desc">
						<div className="content">
							<Fade bottom><p>Choose which destination you would like to see an itinerary break down from</p></Fade>
						</div>
					</div>

					<div className="destinations-container container-fluid">
						<div className="content row">

							{itineraries.map((itinerary, i) => {
								return (
									<Fade bottom key={i}>
										<Link to={`/itinerary/${itinerary.itineraryPageUrl}`} onClick={() => {
											this.props.selectedItinerary(itinerary.itineraryPageUrl);
										}}>
											<div className="itinerary-item">
												<img src={itinerary.coverImage.url} alt={itinerary.itineraryLocation} />
												<div className="text">
													<h3>{itinerary.itineraryLocation}</h3>
												</div>
											</div>
										</Link>
									</Fade>
								);
							})}

						</div>
					</div>
				
				</div>
			</section>
		);
	}
}

ItinerarySection2.proptypes = {
  selectedItinerary: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { selectedItinerary })(ItinerarySection2);