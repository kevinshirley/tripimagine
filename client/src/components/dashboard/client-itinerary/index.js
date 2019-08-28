import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import html2pdf from 'html2pdf.js';

import ItinerarySection3 from '../../itinerary/itinerary-section-3';
import { ButtonUrl } from '../../common/common-button';
import ClientItinerary1 from './client-itinerary-1';
import { getClientItineraries } from '../../../actions/itineraryActions';
import ReadMoreText from '../../common/read-more-text';
import MediaSlider from '../../common/image-slider';

import virtuoso from '../../../assets/img/virtuoso_bnw_logo.png';
import fourSeasons from '../../../assets/img/four-seasons-preferred-partner.png';

class ClientItinerary extends Component {
  constructor() {
    super();

    this.state = {
			isAccomodationOpen: true,
			isDaytodayOpen: true,
		};
  }

  componentDidMount() {
		// start react component from the top
		window.scrollTo(0, 0);

		this.props.getClientItineraries();
  }
  
  generatePDF() {
    var element = document.getElementById('client-itinerary-2');
    html2pdf(element, {
      margin: 1,
      filename: 'test.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { dpi: 300, letterRendering: true, proxy: 'http://localhost:3005', height: 500 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
  }

  render() {
    const { clientItineraries } = this.props.itinerary;
		const url = this.props.location.pathname.substr(21);
		let selectedItineraryData = clientItineraries.filter(itinerary => itinerary.itineraryPageUrl === url);
		selectedItineraryData = selectedItineraryData[0];
    // console.log(selectedItineraryData); 

    let title;
		let coverImage;
		let included;
		let activities;
		let price;
		let overview;
		let shortOverview;
		let mediumOverview;
		let itineraryLocation;
		let accomodationOverview;
		let accomodations;
		let dayToDayOverview;
		let dayToDay;
		let whatWeDoOverviewText;
		let whatWeDo;
		let termsAndConditions;

		if (selectedItineraryData) {
			title = selectedItineraryData.title;
			coverImage = selectedItineraryData.coverImage.url;
			itineraryLocation = selectedItineraryData.location;
			accomodationOverview = selectedItineraryData.accomodationOverviewText;
			accomodations = selectedItineraryData.accomodations;
			activities = selectedItineraryData.activities;
			activities = selectedItineraryData.activities;
			price = selectedItineraryData.price;
			overview = selectedItineraryData.overview;
			dayToDayOverview = selectedItineraryData.dayToDayOverview;
			dayToDay = selectedItineraryData.dayToDay;
			whatWeDoOverviewText = selectedItineraryData.whatWeDoOverviewText;
			whatWeDo = selectedItineraryData.whatWeDo;
			included = selectedItineraryData.included;
			termsAndConditions = selectedItineraryData.itineraryTermsAndConditions;
    }

    if (overview && overview.length > 500) {
			shortOverview = overview.substr(0, 500) + " ... ";
		}

		if (overview && overview.length > 1200) {
			mediumOverview = overview.substr(0, 1200) + " ... ";
		}

    return (
      <section className="itinerary-destination-container">
        <ClientItinerary1 />
        <ButtonUrl name="Back" url="/dashboard" icon="arrow_back" />
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
                <h4>Locations</h4>
                <p className="locations">Visit to: {itineraryLocation}</p>
                {included && <h4>Highlights</h4>}
                <div className="itinerary-included-items">
                  {included && included.map((item, i) => (
                    <div className="item" key={i}>
                      <i className="material-icons">{item.icon}</i>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                {activities && <h4>Activities</h4>}
                <div className="itinerary-included-items">
                  {activities && activities.map((item, i) => (
                    <div className="item" key={i}>
                      <i className="material-icons">{item.icon}</i>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <h4>Price</h4>
                <p className="locations">{price}</p>
                {overview && <h4>Overview</h4>}
                <Fade bottom><p>{shortOverview ? (
                  <ReadMoreText short={shortOverview} medium={mediumOverview} long={overview} />
                ) : overview}</p></Fade>
              </div>
            </div>
    
            <div className="partners-container">
              <div className="images">
                <img src={virtuoso} alt="Trip Imagine Virtuoso Member"/>
                <img src={fourSeasons} alt="Trip Imagine Four Seasons Preferred Partner"/>
              </div>
            </div>
    
            <ItinerarySection3 />
    
            {/* <div className="itinerary-item-explore">
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
            </div> */}
    
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
                {accomodations && accomodations.map((accomodation, i) => {
                  let shortAccomodationDescription;
                  let mediumAccomodationDescription;
                  let accomodationDescription = accomodation.description;
    
                  if (accomodationDescription && accomodationDescription.length > 500) {
                    shortAccomodationDescription = accomodationDescription.substr(0, 500) + " ... ";
                  }
    
                  if (accomodationDescription && accomodationDescription.length > 1200) {
                    mediumAccomodationDescription = accomodationDescription.substr(0, 1200) + " ... ";
                  }

                  return (
                    <div className="accomodation-item" key={i}>
                      <div className="title">
                        <Fade bottom><h4>{i+1}. {accomodation.name}</h4></Fade>
                      </div>
    
                      <div className="img">
                        <MediaSlider images={accomodation.images} />
                      </div>
    
                      <div className="text">
                        <div className="content">
                          <p>{shortAccomodationDescription ? (
                            <ReadMoreText 
                              short={shortAccomodationDescription}
                              medium={mediumAccomodationDescription}
                              long={accomodationDescription}
                            />
                          ) : accomodationDescription}</p>
                        </div>
                      </div>
                      {accomodation && accomodation.accommodationWebLink && false && (
                        <div className="text">
                          <div className="content">
                            <p>Link: <a href={accomodation.accommodationWebLink} target="_blank">{accomodation.accommodationWebLink}</a></p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <span className='see-less' onClick={() => {
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
                      <MediaSlider images={day.images} />
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
                <span className='see-less' onClick={() => {
                  this.setState(prevState => ({
                    isDaytodayOpen: !prevState.isDaytodayOpen
                  }))
                }} style={{ display: !this.state.isDaytodayOpen ? 'none' : '' }}>See Less</span>
              </div>
            </div>
    
            {whatWeDo && (
              <div className="itinerary-item-what-we-do" id="what-we-do">
                <div className="title">
                  <div className="content">
                    {whatWeDo && <h3>What We Do</h3>}
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
            )}
    
            {termsAndConditions && whatWeDo && (
              <ItinerarySection3 />
            )}
    
            {termsAndConditions && (
              <div className="itinerary-item-what-we-do" id="what-we-do">
                <div className="title">
                  <div className="content">
                    {termsAndConditions && <h3>Terms and Conditions</h3>}
                  </div>
                </div>
      
                <div className="desc">
                  <p>{termsAndConditions && termsAndConditions}</p>
                </div>
              </div>
            )}
    
            <div className="partners-container">
              <div className="images">
                <img src={virtuoso} alt="Trip Imagine Virtuoso Member"/>
                <img src={fourSeasons} alt="Trip Imagine Four Seasons Preferred Partner"/>
              </div>
            </div>
          
          </div>
        </div>
        <ItinerarySection3 />
        {/* <br/>
        <button onClick={() => this.generatePDF()}>Download as PDF</button> */}
      </section>
    );
  }
}

ClientItinerary.proptypes = {
  getClientItineraries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	itinerary: state.itinerary,
});

export default connect(mapStateToProps, { getClientItineraries })(ClientItinerary);
