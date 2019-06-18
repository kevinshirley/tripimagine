import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ireland from '../../assets/img/ireland/ireland.jpg';
import day1Img from '../../assets/img/trip-imagine-mexico.jpg';

class ItinerarySection2 extends Component {
	render() {
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

							<Fade bottom>
								<Link to="/itinerary/ireland">
									<div className="itinerary-item">
										<img src={ireland} alt="Ireland" />
										<div className="text">
											<h3>Ireland</h3>
										</div>
									</div>
								</Link>
							</Fade>

							<Fade bottom>
								<Link to="/itinerary/spain-and-portugal">
									<div className="itinerary-item">
										<img src={ireland} alt="Spain and Portugal" />
										<div className="text">
											<h3>Spain and Portugal</h3>
										</div>
									</div>
								</Link>
							</Fade>

							<Fade bottom>
								<Link to="/itinerary/italia">
									<div className="itinerary-item">
										<img src={ireland} alt="Italia" />
										<div className="text">
											<h3>Italia</h3>
										</div>
									</div>
								</Link>
							</Fade>
						
							{/*<div className="itinerary-item">
								<Link to="/itinerary/ireland">
									<img src={ireland} alt="Ireland" />
									<div className="overlay">
										<div className="text">
											<h3>Ireland</h3>
										</div>
									</div>
								</Link>
							</div>

							<div className="itinerary-item">
								<Link to="/itinerary/spain-and-portugal">
									<img src={day1Img} alt="Spain and Portugal" />
									<div className="overlay">
										<div className="text">
											<h3>Spain and Portugal</h3>
										</div>
									</div>
								</Link>
							</div>

							<div className="itinerary-item">
								<Link to="/itinerary/italia">
									<img src={day1Img} alt="Italia" />
									<div className="overlay">
										<div className="text">
											<h3>Italia</h3>
										</div>
									</div>
								</Link>
							</div>*/}

						</div>
					</div>

					{/*<div className="itinerary-item-container">

						<div className="itinerary-item">
							<Link to="/itinerary/ireland">
								<img src={ireland} alt="Ireland" />
								<div className="overlay">
									<div className="text">
										<h3>Ireland</h3>
									</div>
								</div>
							</Link>
						</div>

						<div className="itinerary-item">
							<Link to="/itinerary/spain-and-portugal">
								<img src={day1Img} alt="Spain and Portugal" />
								<div className="overlay">
									<div className="text">
										<h3>Spain and Portugal</h3>
									</div>
								</div>
							</Link>
						</div>

						<div className="itinerary-item">
							<Link to="/itinerary/italia">
								<img src={day1Img} alt="Italia" />
								<div className="overlay">
									<div className="text">
										<h3>Italia</h3>
									</div>
								</div>
							</Link>
						</div>

					</div>*/}
				
				</div>
			</section>
		);
	}
}

export default ItinerarySection2;