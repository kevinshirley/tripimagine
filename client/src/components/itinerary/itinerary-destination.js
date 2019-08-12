import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItinerarySection1 from './itinerary-section-1';
import ItinerarySection3 from './itinerary-section-3';
import { ButtonUrl } from '../common/common-button';
import Fade from 'react-reveal/Fade';
import ImageSlider from '../common/image-slider';

import virtuoso from '../../assets/img/virtuoso_bnw_logo.png';
import fourSeasons from '../../assets/img/four-seasons-preferred-partner.png';
import { getItineraries } from '../../actions/itineraryActions';

class ItineraryDestination extends Component {
	constructor() {
    super();

    this.state = {
			isAccomodationOpen: false,
			isDaytodayOpen: false,
		};
	}
	
	componentDidMount() {
		// start react component from the top
		window.scrollTo(0, 0);
		document.title = 'Itinerary to Ireland | Trip Imagine';

		this.props.getItineraries();
	}
	
	render() {
    const { itineraries } = this.props.itinerary;
		const url = this.props.location.pathname.substr(11);
		let selectedItineraryData = itineraries.filter(itinerary => itinerary.itineraryPageUrl === url);
		selectedItineraryData = selectedItineraryData[0];
		// console.log(selectedItineraryData);

		let title;
		let coverImage;
		let overview;
		let itineraryLocation;
		let accomodationOverview;
		let accomodations;
		let dayToDayOverview;
		let dayToDay;
		let whatWeDoOverviewText;
		let whatWeDo;
		let included;
		let termsAndConditions;
		if (selectedItineraryData) {
			title = selectedItineraryData.title;
			coverImage = selectedItineraryData.coverImage.url;
			overview = selectedItineraryData.overview;
			itineraryLocation = selectedItineraryData.itineraryLocation;
			accomodationOverview = selectedItineraryData.accomodationOverview;
			accomodations = selectedItineraryData.accomodations;
			dayToDayOverview = selectedItineraryData.dayToDayOverview;
			dayToDay = selectedItineraryData.dayToDay;
			whatWeDoOverviewText = selectedItineraryData.whatWeDoOverviewText;
			whatWeDo = selectedItineraryData.whatWeDo;
			included = selectedItineraryData.included;
			termsAndConditions = selectedItineraryData.itineraryTermsAndConditions;
		}

		return (
			<section className="itinerary-destination-container">
				<ItinerarySection1 />
				<ButtonUrl name="Back" url="/itinerary" icon="arrow_back" />
				<div className="itinerary-item-content">
					<div className="overlay">

						<div className="itinerary-item-title">
							<h2>{title}</h2>
						</div>

						<div className="itinerary-item-cover-img">
							<img src={coverImage} alt="Cliffs of Moher in Ireland"/>
						</div>

						<div className="itinerary-item-desc">
							<div className="content">
								<h4>Highlights</h4>
								<div className="itinerary-included-items">
									{included && included.map((item, i) => (
										<div className="item" key={i}>
											<i className="material-icons">{item.icon}</i>
											<span>{item.text}</span>
										</div>
									))}
								</div>
								<h4>Locations</h4>
								<p className="locations">{itineraryLocation}</p>
								<h4>Reviews</h4>
								<div className="itinerary-star-icons">
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
									<i className="material-icons">star_half</i>
								</div>
								<h4>Overview</h4>
								<Fade bottom><p>{overview}</p></Fade>
							</div>
						</div>

						<div className="partners-container">
							<div className="images">
								<img src={virtuoso} alt="Trip Imagine Virtuoso Member"/>
								<img src={fourSeasons} alt="Trip Imagine Four Seasons Preferred Partner"/>
							</div>
						</div>

						<ItinerarySection3 />

						<div className="itinerary-item-explore">
							<div className="title">
								<div className="content">
									<h3>Explore</h3>
								</div>
							</div>
							<div className="itinerary-item-explore-elements row">
								<div className="itinerary-item-explore-element">
									<a href="#accomodations">Accomodations</a>
								</div>
								<div className="itinerary-item-explore-element">
									<a href="#day-to-day-itinerary">Day to Day Itinerary</a>
								</div>
								<div className="itinerary-item-explore-element">
									<a href="#what-we-do">What We Do</a>
								</div>
							</div>
						</div>

						<div className="accomodation-container" id="accomodations">
							<div className="accomodation-subtitle">
								<div className="content">
									<h3>Accomodations&nbsp;&nbsp;</h3>
									<i className="material-icons" onClick={() => {
										this.setState(prevState => ({
											isAccomodationOpen: !prevState.isAccomodationOpen
										}))
									}}>{!this.state.isAccomodationOpen ? 'add_circle_outline' : 'remove_circle_outline'}</i>
								</div>
							</div>

							<div className="accomodation-subdesc">
								<p>{accomodationOverview}</p>
								<span onClick={() => {
									this.setState(prevState => ({
										isAccomodationOpen: !prevState.isAccomodationOpen
									}))
								}} style={{ display: !this.state.isAccomodationOpen ? '' : 'none' }}>See More</span>
							</div>

							<div className="accomodation-items" style={{ display: !this.state.isAccomodationOpen ? 'none' : 'block' }}>
								{accomodations && accomodations.map((accomodation, i) => (
									<div className="accomodation-item" key={i}>
										<div className="title">
											<Fade bottom><h4>{i+1}. {accomodation.name}</h4></Fade>
										</div>

										<div className="img">
											<ImageSlider images={accomodation.images} />
										</div>

										<div className="text">
											<div className="content">
												<p>{accomodation.description}</p>
											</div>
										</div>
									</div>
								))}
								<span onClick={() => {
									this.setState(prevState => ({
										isAccomodationOpen: !prevState.isAccomodationOpen
									}))
								}} style={{ display: !this.state.isAccomodationOpen ? 'none' : '' }}>See Less</span>
							</div>
						</div>

						<div className="day-to-day-container" id="day-to-day-itinerary">
							<div className="title">
								<div className="content">
									<h3>Day to Day Itinerary&nbsp;&nbsp;</h3>
									<i className="material-icons" onClick={() => {
										this.setState(prevState => ({
											isDaytodayOpen: !prevState.isDaytodayOpen
										}))
									}}>{!this.state.isDaytodayOpen ? 'add_circle_outline' : 'remove_circle_outline'}</i>
								</div>
							</div>

							<div className="desc">
								<p>{dayToDayOverview}</p>
								<span onClick={() => {
									this.setState(prevState => ({
										isDaytodayOpen: !prevState.isDaytodayOpen
									}))
								}} style={{ display: !this.state.isDaytodayOpen ? '' : 'none' }}>See More</span>
							</div>
							
							<div className="day-to-day-items" style={{ display: !this.state.isDaytodayOpen ? 'none' : 'block' }}>
								{dayToDay && dayToDay.map((day, i) => (
									<div className="day" key={i}>
										<div className="day-title">
											<Fade bottom><h4>{day.name}</h4></Fade>
										</div>
										<div className="img-container">
											<ImageSlider images={day.images} />
										</div>

										<div className="text">
											<ul>
											{day.list && day.list.map((content, i) => (
												<li key={i}>{content}</li>
											))}
											</ul>
										</div>
									</div>
								))}
								<span onClick={() => {
									this.setState(prevState => ({
										isDaytodayOpen: !prevState.isDaytodayOpen
									}))
								}} style={{ display: !this.state.isDaytodayOpen ? 'none' : '' }}>See Less</span>
							</div>
						</div>

						<div className="itinerary-item-what-we-do" id="what-we-do">
							<div className="title">
								<div className="content">
									<h3>What We Do</h3>
								</div>
							</div>

							<div className="desc">
								<p>{whatWeDoOverviewText}</p>
							</div>

							<div className="what-we-do-list">
								<ul>
									{whatWeDo && whatWeDo.map((option, i) => (
										<li key={i}>{option.text}</li>
									))}
								</ul>
							</div>
						</div>

						<ItinerarySection3 />

						<div className="itinerary-item-what-we-do" id="what-we-do">
							<div className="title">
								<div className="content">
									<h3>Terms and Conditions</h3>
								</div>
							</div>

							<div className="desc">
								<p>{termsAndConditions && termsAndConditions}</p>
							</div>
						</div>

						<div className="partners-container">
							<div className="images">
								<img src={virtuoso} alt="Trip Imagine Virtuoso Member"/>
								<img src={fourSeasons} alt="Trip Imagine Four Seasons Preferred Partner"/>
							</div>
						</div>
					
					</div>
				</div>
				<ItinerarySection3 />
			</section>
		);
	}
}

ItineraryDestination.proptypes = {
  getItineraries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { getItineraries })(ItineraryDestination);