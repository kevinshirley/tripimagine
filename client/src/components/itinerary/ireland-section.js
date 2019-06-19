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
import cliffsOfMoher from '../../assets/img/ireland/trip-imagine-cliffs-of-moher.jpg';
import villageDingle from '../../assets/img/ireland/trip-imagine-village-dingle.jpg';
import dinglePeninsula from '../../assets/img/ireland/trip-imagine-dingle-peninsula.jpg';
import kellsBay from '../../assets/img/ireland/trip-imagine-kells-bay.jpg';
import wildAtlantic from '../../assets/img/ireland/trip-imagine-cliffs-wild-atlantic-way.jpg';
import blarneyCastle from '../../assets/img/ireland/trip-imagine-blarney-castle.jpg';
import horseRiding from '../../assets/img/ireland/trip-imagine-horse-riding.jpg';
import waterfordCrystal from '../../assets/img/ireland/trip-imagine-waterford-crystal.jpg';
import shopDublin from '../../assets/img/ireland/trip-imagine-shopping-dublin.jpg';
import airportDublin from '../../assets/img/ireland/trip-imagine-dublin-airport.jpeg';

class IrelandSection extends Component {
	componentDidMount() {
		// start react component from the top
		window.scrollTo(0, 0);
		document.title = 'Itinerary to Ireland | Trip Imagine';
	}

	render() {
		return (
			<section className="ireland-item-container itinerary-destination-container">
				<ItinerarySection1 />
				<ButtonUrl name="Back" url="/itinerary" icon="arrow_back" />
				<div className="itinerary-item-content">
					<div className="overlay">

						<div className="itinerary-item-title">
							<h2>Luxury Tour Around Beautiful Ireland</h2>
						</div>

						<div className="itinerary-item-cover-img">
							<img src={cliffsOfMoher} alt="Cliffs of Moher in Ireland"/>
						</div>

						<div className="itinerary-item-desc">
							<div className="content">
								<h4>Included</h4>
								<div className="itinerary-included-items">
									<div className="item">
										<i className="material-icons">today</i>
										<span>10 Days</span>
									</div>
									<div className="item">
										<i className="material-icons">local_library</i>
										<span>Private Tour Guide</span>
									</div>
								</div>
								<div className="itinerary-star-icons">
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
									<i className="material-icons">star</i>
								</div>
								<h4>Overview</h4>
								<Fade bottom><p>Discover everything Ireland has to offer through this unique 12-day Trip Imagine Dream Vacation across the country. See all the historic sites and major attractions in world renowned Dublin, such as the Dublin Castle or the Chester Beatty library, with the help of an experienced guide/driver providing insights and details along the way. Reside in luxurious hotels and highly regarded Bed & Breakfasts, ensuring most memorable stays with various amenities to make it all truly special. 10 days is enough time to fully make the most of the driver available to you, and travel across Ireland to enchanting cities like Kilkee and Bantry, on route to the Cliffs of Moher or the Ring of Kerry. This experience is a ‘’must’’ for anyone looking to revel in Ireland undeniable beauty while being in a care-free environment, tailored for you and your budget.</p></Fade>
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
									<Fade bottom><h4>1. The Westin Dublin</h4></Fade>
								</div>

								<div className="img">
									<img src={westinDublin} alt="The Westin Dublin" />
								</div>

								<div className="text">
									<div className="content">
										<p>A mere crossroads more than a millennium ago, Dublin never anticipated becoming one of Europe';s most enchanting and cosmopolitan cities. Today, the rich variety of galleries, shops, and coffeehouses counterpoint innumerable examples of the cities storied past. Behind the historic-listed facade of the former Allied Irish Bank built in 1863, The Westin Dublin is the new landmark in Ireland';s capital, occupying a city block opposite the famous Trinity College. Our superb location close by the exclusive shops of Grafton Street and Dublin';s cultural quarter Temple Bar, makes The Westin a perfect base to explore all of Dublin';s exciting attractions.<br/><br/> Combining an historic, 19th-century facade with all-new interiors, The Westin Dublin has created a new level of luxury in the heart of this capital city. Many guest rooms boast views of the magnificent surrounding Georgian and Victorian architectural landmarks, such as Trinity College and the Bank of Ireland, while others overlook the serene, inspirational atrium, which rises five floors. All newly refurbished, (2013) contemporary styled guest bedrooms offer cable and satellite channels, hairdryer in room, in-room mini bar, in-room movies, in-room safe, maid service, telephone,i-home docking station, air-conditioning and coffee and tea maker.<br/><br/> Sit beneath clear skies by day and a canopy of stars at night in the Atrium Lounge, an inspirational haven of sorts. Or savor a menu of stylish simplicity at The Exchange amidst an abundance of natural light, art-decco mirroring and finishes. If you want to experience Dublin at its finest, grab your closest friends and retreat to The Mint, one of Dublin's favorite meeting places, for a welcoming atmosphere great food,drink and signature cocktails.<br/><br/> Our Fitness Center offers a variety of the latest cardiovascular fitness equipment. Other services include 24-hour front desk, Concierge service, 24-hour room service, wake-up service and parking available. Eight flexible meeting rooms feature natural daylight and offer the latest audio-visual equipment. The original 19th-century Banking Hall, timelessly restored, seats over 200 people.<br/><br/> Please note Hotel Restaurant, The Exchange is only open for breakfast and closed for Lunch/dinner. Mint Bar and The Atrium Lounge available as alternitive dining options ( Mint bar for dinner)<br/><br/></p>

										<ul>
											<li>Daily full breakfast, for up to two in room guests</li> <li>Upgrade on arrival, subject to availability</li> 
											<li>Afternoon tea for two once during stay (advisable to make advance reservations)</li> 
											<li>Early check-in/late check-out, subject to availability</li> <li>Complimentary Wi-Fi</li>
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
										<p>In 1989, Mount Juliet, one of the last great historic estates in Europe, opened its doors to welcome guests from all over the world. The elegant 18th Century Georgian Manor House, surrounded by 1,500 acres of lush Irish pastures and rolling woodlands, provides a rare and beautiful setting for a memorable experience. Guests can explore the estate on bicycles or on foot through its many cycling or dedicated walking trails. The Mount Juliet Equestrian Centre offers tuition to all levels of rider, 500 acres of trail riding, cross country jumping and show jumping to riders and will tailor instruction programs to meet the rider's specific needs. The Clay Target and Archery Academy provides a challenge to marksmen. Salmon and Trout fishing is available on the River Nore which runs through the Estate & Lake Fishing is also available. Tuition and equipment is provided for all sports.<br/><br/> Jack Nicklaus Signature Course Feature holes on Mount Juliet Golf Course include the stunning 3rd hole, a par 3 from an elevated tee to a green guarded by a natural stream and lake ... one that golfers always remember. Also the par 5, 10th hole with its copse of trees which tests the golfers strategy. The final hole, a long par 4 with water all down the left and a narrow approach to the green has decided many a tournament result.<br/><br/> Those who prefer to remain indoors can choose between the snooker room or the stylish Leisure Centre and Spa which features a 15m heated swimming pool, sauna, steam room, gym and full Beauty Salon.<br/><br/> Mount Juliet House The 31 sumptuous bedrooms of Mount Juliet's main house are "multi-storied" in a quainter sense of the phrase: each has a story and a history uniquely its own.<br/><br/> Bountifully proportioned, light-filled Georgian interiors tastefully incorporate the very latest technology. Every room has free Wifi, cable TV, trouser press, splendid en-suite, built-in safe, and a tea and coffee station, as standard.<br/><br/> Rose Garden Lodges: Lovingly refurbished of late, each lodge offers a level of comfort that will make you think twice about venturing out for anything during your stay. Each lodge has two en-suite bedrooms, a fully-equipped kitchen, a dining area and a splendid lounge.<br/><br/> The Lady Helen Restaurant ~ Awarded 1 Michelin Star & 3 AA Rosettes The Lady Helen Restaurant enjoys panoramic views over the estate and River Nore. Here a variety of international dishes are prepared using local produce and fresh herbs, picked daily from the estate's own herb garden. Gourmet dining and superb service are complemented by the opulent ambience of dining in the Lady Helen.<br/><br/> Kendals Brasserie Kendal's is a French Brasserie and provides an ideal spot for great food in a casual atmosphere.<br/><br/> President's Bar The President's Bar is our all-day dining option that serves soups, snacks and salads and an extensive charcoal grill menu throughout the day.<br/><br/></p>

										<ul>
											<li>Upgrade on arrival, subject to availability</li> 
											<li>Continental breakfast daily, for up to two in room guests, served in Lady Helen restaurant</li> 
											<li>Early check-in/late check-out, subject to availability</li> 
											<li>Mount Juliet Estate Cremant Afternoon Tea for two</li>
											<li>Guided Estate Tour</li>
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
										<p>Glenapp Castle is situated in a stunning region of South West Scotland and as you sweep up the long tree clad drive you will glimpse the beautiful façade of the castle encapsulating the romance of the Scottish Baronial style with magical towers, turrets, and crenellations. Once inside our luxury 5 star castle hotel a world of Victorian splendour is yours.<br/><br/> Oak panelled halls lead to the heart of the castle offering stunning views out to sea and the famous volcanic outcrop of Ailsa Craig. Beyond that you can see the Isle of Arran, Holy Island, and, on a clear day, the hills of Northern Ireland.<br/><br/> The castle and surrounding estate have a rich history. The Glenapp Estate was already well established under the ownership of the Earl of Orkney when the industrialist, James Hunter (later to become the Deputy Lord Lieutenant of Ayrshire), acquired it and commissioned in 1870 the celebrated Edinburgh architect, David Bryce, to design a suitably magnificent home for him. The castle's mellow sandstone battlements, topped by soaring turrets and towers, have earned Glenapp a rightful place as one of the most romantic luxury castles in Scotland.<br/><br/> It is not just the beauty of Glenapp that entices guests to stay but also the wonderful castle dining experience. Our Executive Chef creates some amazing daily changing menus which showcase all our 'in season' and local Scottish produce and with his culinary flare the dining experience is always one of the main highlights for any guest.<br/><br/> In addition, Glenapp Castle offers a wide variety of activities and experiences either on the estate or nearby. There really is something for everyone at Glenapp!<br/><br/></p>

										<ul>
											<li>Upgrade on arrival, subject to availability</li> 
											<li>Complimentary Traditional Table Served Full Scottish Breakfast for two daily for duration of the stay</li> 
											<li>Complimentary one-way private airport transfers (must have minimum value of $100USD equivalent)</li> 
											<li>Dram of whisky for two</li>
											<li>Early check-in/late check-out, subject to availability</li>
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

export default IrelandSection;