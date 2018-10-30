import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getPhotosAPI from './../../../api/getPhotos.js';
import Fade from 'react-reveal/Fade';

class ContinentSection2 extends Component {
  constructor() {
    super();

    this.state = {
      img: ''
    };
  }

  render() {
    let currentContinent = this.props.location.state.name;
    let subTitle = this.props.location.state.subTitle;
    let description = this.props.location.state.description;
    getPhotosAPI(currentContinent, (data) => this.setState({ img: data.data}));
    
    return (
      <section className="continent-section-2">

        <div className="back-to-atlas">
          <Fade bottom><Link to="/atlas">← Back to Atlas</Link></Fade>
        </div>

        <div className="destinations-container container-fluid">
          <div className="content row">
            <div className="img col-sm-6">
              <Fade bottom><img src={ this.state.img } alt={ currentContinent } className="img-fluid" /></Fade>
            </div>
            <div className="text col-sm-6">
              <br/>
                <Fade bottom><h3>{ subTitle }</h3></Fade>
              <br/>
                <Fade bottom><p>{ description }</p></Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContinentSection2;