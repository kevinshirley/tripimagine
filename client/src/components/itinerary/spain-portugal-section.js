import React, { Component } from 'react';
import ItinerarySection1 from './itinerary-section-1';
import ItinerarySection3 from './itinerary-section-3';
import { ButtonUrl } from '../common/common-button';
import Fade from 'react-reveal/Fade';
import day1Img from '../../assets/img/trip-imagine-mexico.jpg';
import day2Img from '../../assets/img/trip-imagine-luxury-hotel.jpg';
import day3Img from '../../assets/img/trip-imagine-pool-side.jpg';
import westinDublin from '../../assets/img/ireland/trip-imagine-westin-dublin.jpg';
import mountJuliet from '../../assets/img/ireland/ireland-mount-juliet.jpg';
import glenappCastle from '../../assets/img/ireland/trip-imagine-culzean-castle-view.jpg';
import dublinCastle from '../../assets/img/ireland/trip-imagine-dublin-castles.jpg';
import chesterBeattyLibrary from '../../assets/img/ireland/trip-imagine-chester-beatty-library.jpeg';
import cliffsMoher from '../../assets/img/ireland/trip-imagine-cliffs-moher.jpg';
import villageDingle from '../../assets/img/ireland/trip-imagine-village-dingle.jpg';
import dinglePeninsula from '../../assets/img/ireland/trip-imagine-dingle-peninsula.jpg';
import kellsBay from '../../assets/img/ireland/trip-imagine-kells-bay.jpg';
import wildAtlantic from '../../assets/img/ireland/trip-imagine-cliffs-wild-atlantic-way.jpg';
import blarneyCastle from '../../assets/img/ireland/trip-imagine-blarney-castle.jpg';
import horseRiding from '../../assets/img/ireland/trip-imagine-horse-riding.jpg';
import waterfordCrystal from '../../assets/img/ireland/trip-imagine-waterford-crystal.jpg';
import shopDublin from '../../assets/img/ireland/trip-imagine-shopping-dublin.jpg';
import airportDublin from '../../assets/img/ireland/trip-imagine-dublin-airport.jpeg';

class SpainPortugalSection extends Component {
	componentDidMount() {
		// start react component from the top
    window.scrollTo(0, 0);
	}

	render() {
		return (
			<section className="spain-portugal-item-container itinerary-destination-container">
				<ItinerarySection1 />
				<ButtonUrl name="Back" url="/itinerary" icon="arrow_back" />
				<div className="itinerary-item-content">
					<div className="overlay">

						<div className="itinerary-item-title">
							<h2>The ultimate Spain and Portugal experience</h2>
						</div>

						<div className="itinerary-item-desc">
							<div className="content">
								<Fade bottom><p>From romantic Lisboa all the way down to vibrant Sevilla, southwestern Iberia is home to some of the most unique and well-conserved towns in the entire peninsula. This 12 day Trip Imagine Dream Vacation will take you to a toro bravo ranch to observe the emblematic beast in its natural environment, to the rugged red Algarve cliffs and the tranquil beaches that hug them, to the heart of Portugal by way of transcendental fado music, and all of the castizo gems in between. By the end of your route, you will feel like you truly know the soul of classic Spain and Portugal, having seen it through the eyes of the locals that dedicate their lives to sustaining it.<br/><br/>It is our pleasure to share this sample itinerary to give you an idea of what we could create together. Each detail of the Trip Imagine Dream Vacation is entirely customizable based on the needs and wishes of your clients!</p></Fade>
							</div>
						</div>

						<div className="accomodation-container">
							<div className="accomodation-subtitle">
								<div className="content">
									<h3>Accomodations</h3>
								</div>
							</div>

							<div className="accomodation-subdesc">
								<p>Here are some examples of the type of accommodations you can indulge in during your Trip Imagine Experience.</p>
							</div>

							<div className="accomodation-item">
								<div className="title">
									<Fade bottom><h4>1. Anantara Vilamoura Algarve Resort</h4></Fade>
								</div>

								<div className="img">
									<img src={westinDublin} alt="Anantara Vilamoura Algarve Resort" />
								</div>

								<div className="text">
									<div className="content">
										<p>Debuting Anantara’s authentic luxury in Europe, Anantara Vilamoura Algarve Resort offers a landmark of quiet prestige, along southern Portugal’s picturesque Algarve coast. Immerse in Vilamoura’s glamour from a tranquil retreat, overlooking the Victoria golf course.<br/><br/>Revealing a journey of local artistry, the hotel’s sculptures, artwork, paintings and installations create a contemporary Portuguese gallery. Signature luxuries embrace you in spacious rooms, indulgent suites and penthouse prestige. Relax on elegant terraces, refreshed by rolling golf greens and cerulean pools. Feel renewed by spa pampering that draws on healing Algarvian traditions, exploring a unique Ayurvedic philosophy that is exclusive in the region. Drift between five beautiful pools. World-class facilities welcome families with fun dining, creative clubs for kids and teens.<br/><br/>Poolside Champagne cabanas refresh relaxation with decadence. Emotive fine dining fuses Portugal’s spice trading discoveries. Al fresco decks romantic sundowners. Wine Guru journeys swirl stories of local heritage vines. Love and family celebrations are tailored impeccably with Dining by Design.<br/><br/>Just moments from golf-side tranquillity, Vilamoura is an energizing celebrity enclave of desirable boutiques and glittering nightlife. Sunshine glows on golden beaches. Vilamoura Marina is the place to see, be seen and embark on sailing voyages. The Algarve’s zest flourishes as you explore wineries, olive groves and luminous fleur de sel fields. Time spent at the golf club on our doorstep, and over 30 nearby courses, is seamlessly arranged by our Golf Guru.<br/><br/></p>

										<ul>
											<li>Upgrade on arrival, subject to availability</li>
											<li>Complimentary Buffet Breakfast for two daily for duration of the stay</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="accomodation-item">
								<div className="title">
									<Fade bottom><h4>2. Mount Juliet</h4></Fade>
								</div>

								<div className="img">
									<img src={mountJuliet} alt="Mount Juliet" />
								</div>

								<div className="text">
									<div className="content">
									<p>Hotel description.</p>

										<ul>
											<li>Complimentary Wi-Fi</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="accomodation-item">
								<div className="title">
									<Fade bottom><h4>3. Glenapp Castle</h4></Fade>
								</div>

								<div className="img">
									<img src={glenappCastle} alt="Glenapp Castle" />
								</div>

								<div className="text">
									<div className="content">
										<p>Hotel description.</p>

										<ul>
											<li>Complimentary Wi-Fi</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="day-to-day-container">
							<div className="title">
								<div className="content">
									<h3>Day to Day Itinerary</h3>
								</div>
							</div>

							<div className="desc">
								<p>This is just an example of one of our Trip Imagine day to day itinerary. It can be modified to fit your needs and budget for the trip at anytime.</p>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 1</h4></Fade>
								</div>
								<div className="img-container">
									<img src={dublinCastle} alt="Day 1" />
								</div>

								<div className="text">
									<ul>
										<li>Visit the Dublin Castle</li>
										<li>Visit the St. Patrick’s Cathedral</li>
										<li>Visit Guinness Brewery</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 2</h4></Fade>
								</div>
								<div className="img-container">
									<img src={chesterBeattyLibrary} alt="Day 2" />
								</div>

								<div className="text">
									<ul>
										<li>Visit the Chester Beatty Library</li>
										<li>Visit Trinity College Book of Kells</li>
										<li>Visit Kilmainham Gaol</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 3</h4></Fade>
								</div>
								<div className="img-container">
									<img src={cliffsMoher} alt="Day 3" />
								</div>

								<div className="text">
									<ul>
										<li>Travel to Unseco world Heritage Cliffs of Moher</li>
										<li>Visit Dunguaire Castle</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 4</h4></Fade>
								</div>
								<div className="img-container">
									<img src={villageDingle} alt="Day 4" />
								</div>

								<div className="text">
									<ul>
										<li>Travel south to the coastal village of Kilkee</li>
										<li>Visit final resting place of Cranberries star Dolores O'Riordan</li>
										<li>Travel to the charming village of Dingle</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 5</h4></Fade>
								</div>
								<div className="img-container">
									<img src={dinglePeninsula} alt="Day 5" />
								</div>

								<div className="text">
									<ul>
										<li>Exploring the amazing Dingle peninsula</li>
										<li>Visit Gallarus Oratory</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 6</h4></Fade>
								</div>
								<div className="img-container">
									<img src={kellsBay} alt="Day 6" />
								</div>

								<div className="text">
									<ul>
										<li>Visit Kells Bay House and Gardens</li>
										<li>Travel to Valentia Island</li>
										<li>Visit The Skellig Experience Visitor Centre</li>
										<li>Visit Skellig Chocolate Factory</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 7</h4></Fade>
								</div>
								<div className="img-container">
									<img src={wildAtlantic} alt="Day 7" />
								</div>

								<div className="text">
									<ul>
										<li>Travel the Wild Atlantic Way on the famous Ring of Kerry</li>
										<li>Village of Kenmare for the lovely shops and relaxing dinner</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 8</h4></Fade>
								</div>
								<div className="img-container">
									<img src={blarneyCastle} alt="Day 8" />
								</div>

								<div className="text">
									<ul>
										<li>Travel the Beara Peninsula</li>
										<li>Travel to the lovely fishing village of Bantry and stop for lunch</li>
										<li>Visit the Blarney Castle</li>
										<li>Visit to Kiss the Blarney Stone</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 9</h4></Fade>
								</div>
								<div className="img-container">
									<img src={horseRiding} alt="Day 9" />
								</div>

								<div className="text">
									<ul>
										<li>Horse riding experience</li>
										<li>Visit Charles Fort</li>
										<li>Titanic Experience in Cobh</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 10</h4></Fade>
								</div>
								<div className="img-container">
									<img src={waterfordCrystal} alt="Day 10" />
								</div>

								<div className="text">
									<ul>
										<li>Visit Waterford Crystal factory</li>
										<li>Travel back to Dublin to spend the afternoon & evening enjoying your last night in the Capital City</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 11</h4></Fade>
								</div>
								<div className="img-container">
									<img src={shopDublin} alt="Day 11" />
								</div>

								<div className="text">
									<ul>
										<li>Spend the day relaxing in the City and enjoy some last minute shopping</li>
									</ul>
								</div>
							</div>

							<div className="day">
								<div className="day-title">
									<Fade bottom><h4>Day 12</h4></Fade>
								</div>
								<div className="img-container">
									<img src={airportDublin} alt="Day 12" />
								</div>

								<div className="text">
									<ul>
										<li>Transfer to Dublin Airport</li>
									</ul>
								</div>
							</div>
						</div>
					
					</div>
				</div>
				<ItinerarySection3 />
			</section>
		);
	}
}

export default SpainPortugalSection;