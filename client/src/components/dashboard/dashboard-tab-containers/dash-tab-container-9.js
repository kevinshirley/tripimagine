import React, { Component } from 'react';
import { Button } from '../../common/common-button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import { selectedClientItinerary, getClientItineraries } from '../../../actions/itineraryActions';

class DashTabContainer9 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {

		this.props.getClientItineraries();
	}

  render() {
    const { clientItineraries } = this.props.itinerary;
    console.log(clientItineraries);
    return (
      <div className="destinations-container container-fluid">
        <div className="content row">
        {clientItineraries && clientItineraries.map((itinerary, i) => (
          <Link to={`/dashboard/itinerary/${itinerary.itineraryPageUrl}`} onClick={() => {
            this.props.selectedClientItinerary(itinerary.itineraryPageUrl);
          }} key={i}>
            <div className="itinerary-item">
              <img src={itinerary.coverImage.url} alt={itinerary.itineraryLocation} />
              <div className="text">
                <div className="title">
                  <h3>{itinerary.title}</h3>
                  <h5>Client: {itinerary.clientName}</h5>
                </div>
                <div className="included">
                  {/* <h5>{itinerary.included[0].text}</h5> */}
                </div>
                {/* <div className="review-icons">
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                  <i className="material-icons">star_half</i>
                </div> */}
                <div className="cta">
                  <span>Learn more&nbsp;</span>
                  <i className="material-icons">chevron_right</i>
                </div>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    );
  }
}

DashTabContainer9.proptypes = {
  selectedClientItinerary: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { selectedClientItinerary, getClientItineraries })(DashTabContainer9);
