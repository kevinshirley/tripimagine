import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

import { selectedClientItinerary } from '../../../actions/itineraryActions';

class ClientItinerarySection2 extends Component {
	render() {
		const { itineraries } = this.props;

		return (
			<section className="itinerary-section-2 client-itineraries">
				<div className="overlay">

					<div className="itinerary-desc">
						<div className="content">
							<Fade bottom><p>Choose which destination you would like to see an itinerary break down from</p></Fade>
						</div>
					</div>

					<div className="destinations-container container-fluid">
						<div className="content row">

							{itineraries.map((itinerary, i) => (
								<Fade bottom key={i}>
									<Link to={`/client/itinerary/${itinerary.itineraryPageUrl}`} onClick={() => {
										this.props.selectedClientItinerary(itinerary.itineraryPageUrl);
									}}>
										<div className="itinerary-item">
											<img src={itinerary.coverImage.url} alt={itinerary.itineraryLocation} />
											<div className="text">
												<div className="title">
													<h3>{itinerary.title}</h3>
													{/* <h5>With visits to: {itinerary.itineraryLocation}</h5> */}
													<h5>Client Name: {itinerary.clientName}</h5>
												</div>
												<div className="included">
													<h5>{itinerary.included[0].text}</h5>
												</div>
												<div className="review-icons">
													<i className="material-icons">star</i>
													<i className="material-icons">star</i>
													<i className="material-icons">star</i>
													<i className="material-icons">star</i>
													<i className="material-icons">star_half</i>
												</div>
												<div className="cta">
													<span>Learn more&nbsp;</span>
													<i className="material-icons">chevron_right</i>
												</div>
											</div>
										</div>
									</Link>
								</Fade>
							))}

						</div>
					</div>
				
				</div>
			</section>
		);
	}
}

ClientItinerarySection2.proptypes = {
  selectedClientItinerary: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { selectedClientItinerary })(ClientItinerarySection2);