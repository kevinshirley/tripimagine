import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import $ from "jquery";
import { Link } from 'react-router-dom';
import DashTabContainer1 from './dashboard-tab-containers/dash-tab-container-1';
import DashTabContainer2 from './dashboard-tab-containers/dash-tab-container-2';
import DashTabContainer3 from './dashboard-tab-containers/dash-tab-container-3';
import DashTabContainer4 from './dashboard-tab-containers/dash-tab-container-4';
import DashTabContainer5 from './dashboard-tab-containers/dash-tab-container-5';
import DashTabContainer6 from './dashboard-tab-containers/dash-tab-container-6';
import DashTabContainer7 from './dashboard-tab-containers/dash-tab-container-7';

class DashboardTabContainers extends Component {
  constructor() {
    super();

    this.state = {
      newTab: ''
    };

    this.showTabContainer = this.showTabContainer.bind(this);
  }

  initialTabContainer = () => {
    let containers = document.getElementsByClassName('dash-container');

    for (var i = 0; i < containers.length; ++i) {
      var container = containers[i];
      let id = 'dash-container_0';

      if ($(container).attr('id') !== id) {
        $(container).hide();
      } else {
        $(container).show();
      }
    }
  }

  showTabContainer = (tabID) => {
    let containers = document.getElementsByClassName('dash-container');
    let id = 'dash-container'+tabID;

    for (var i = 0; i < containers.length; ++i) {
      var container = containers[i];

      if ($(container).attr('id') !== id) {
        $(container).hide();
      } else {
        $(container).show();
      }
    }
  }

  componentDidMount() {
    // set initial tab container on mount
    this.initialTabContainer();
  }

  componentDidUpdate(prevProps, prevState) {
    // change the tab container view
    if (this.props.onTabChange !== this.state.newTab ) {
      this.showTabContainer(this.props.onTabChange);
    }
  }

  render() {
    let hasProfile = this.props.hasProfile;
    return (
      <div>
        <div id="dash-container_0" className="dash-container">
          <h5>Hi {this.props.name} ! Choose one of the tab menu to get started.</h5>
          <br/>
          <div className="row" style={{ display: hasProfile ? 'none' : 'block' }}>
            <div className="alert alert-warning" >
              <p>You have not yet setup your profile, please add some info before you continue.</p>
              <Link to="/dashboard/manage-profile">Manage Profile</Link>
            </div>
          </div>
          <div className="row">
            <div className="alert alert-info" >
              <p>You can manage or build your next trip with any tour activities in a destination of your like. A travel consultant can guide you anytime along the process, if needed.</p>
              <Link to="/dashboard/trips">My Trips</Link>
            </div>
          </div>
        </div>
        <div id="dash-container_1" className="dash-container">
          <Fade bottom>
            <DashTabContainer1 hasProfile={this.props.hasProfile} />
          </Fade>
        </div>
        <div id="dash-container_2" className="dash-container">
          <Fade bottom>
            <DashTabContainer2 />
          </Fade>
        </div>
        <div id="dash-container_3" className="dash-container">
          <Fade bottom>
            <DashTabContainer3 />
          </Fade>
        </div>
        <div id="dash-container_4" className="dash-container">
          <Fade bottom>
            <DashTabContainer4 />
          </Fade>
        </div>
        <div id="dash-container_5" className="dash-container">
          <Fade bottom>
            <DashTabContainer5 />
          </Fade>
        </div>
        <div id="dash-container_6" className="dash-container">
          <Fade bottom>
            <DashTabContainer6 />
          </Fade>
        </div>
        <div id="dash-container_7" className="dash-container">
          <Fade bottom>
            <DashTabContainer7 />
          </Fade>
        </div>
      </div>
    );
  }
}

export default DashboardTabContainers;
