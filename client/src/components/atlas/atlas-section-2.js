import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class AtlasSection2 extends Component {
  constructor() {
    super();

    this.state = {
      img: ''
    };
  }
  
  prepareString(obj) {
    var string = obj;

    string = string.toString().toLowerCase();

    if(string.indexOf(' ') >= 0){
      string = string.replace(/\s+/g, '-');
    }

    return string;
  }

  render() {
    let continents = this.props.destinations;
    continents = Object.entries(continents);

    return (
      <section className="atlas-section-2">
        <div className="overlay">

          <div className="desc-container">
            <div className="content">
              <Fade bottom><h4>Where you can get a glimpse of the best destinations in the world.</h4></Fade>
            </div>
          </div>
          
        </div>

        <div className="destinations-container container-fluid">
          <div className="content row">
            {continents.map((continent, i) => {
              let objContinent = {continent};
              objContinent = objContinent.continent[1];
              let upperContinent = {continent};
              let lowerContinent = {continent};

              upperContinent = upperContinent.continent[0];
              lowerContinent = this.prepareString(lowerContinent.continent[0]);

              let imgUrl = `http://media.tripimagine.com/img/${lowerContinent}-with-trip-imagine.jpg`;
              
              return <Fade bottom key={i}><Link to={{ pathname: `/atlas/${lowerContinent}`, state: { name: `${upperContinent}`, subTitle: `${objContinent.pageSubTitle}`, description: `${objContinent.pageDescription}` } }} key={i}><div className="destination" key={i}><img src={ imgUrl } alt={upperContinent} /><div className="text"><span>{upperContinent}</span></div></div></Link></Fade> })}
          </div>
        </div>
      </section>
    );
  }
}

export default AtlasSection2;