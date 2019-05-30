import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
}

class ContactSectionMaps extends Component {
  render() {
    return (
      <section className="contact-section-maps">
        <div className="overlay">

          <div className="content">

            <Map google={this.props.google} zoom={14} style={style}>
              <Marker onClick={this.onMarkerClick} name={'Canada'} />
            </Map>

          </div>

        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAvuB-2tBxCIqG4arvGSyZvp9pP8Ycza6o")
})(ContactSectionMaps);