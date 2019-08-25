import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import $ from "jquery";
import DashTabContainer0 from './dashboard-tab-containers/dash-tab-container-0';
import DashTabContainer1 from './dashboard-tab-containers/dash-tab-container-1';
import DashTabContainer2 from './dashboard-tab-containers/dash-tab-container-2/dash-tab-container-2';
import DashTabContainer3 from './dashboard-tab-containers/dash-tab-container-3';
import DashTabContainer4 from './dashboard-tab-containers/dash-tab-container-4';
import DashTabContainer5 from './dashboard-tab-containers/dash-tab-container-5';
import DashTabContainer6 from './dashboard-tab-containers/dash-tab-container-6';
import DashTabContainer7 from './dashboard-tab-containers/dash-tab-container-7';
import DashTabContainer8 from './dashboard-tab-containers/dash-tab-container-8';
import DashTabContainer9 from './dashboard-tab-containers/dash-tab-container-9';

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
    let name = this.props.name;
    let isAdmin = this.props.isAdmin;
    return (
      <div>
        <div id="dash-container_0" className="dash-container">
          <Fade bottom>
            <DashTabContainer0 hasProfile={hasProfile} name={name} />
          </Fade>
        </div>
        <div id="dash-container_1" className="dash-container">
          <Fade bottom>
            <DashTabContainer1 hasProfile={this.props.hasProfile} name={name} />
          </Fade>
        </div>
        <div id="dash-container_2" className="dash-container">
          <Fade bottom>
            <DashTabContainer2 hasProfile={this.props.hasProfile} />
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
        {isAdmin && 
          <div id="dash-container_8" className="dash-container">
            <Fade bottom>
              <DashTabContainer8 isAdmin={isAdmin} />
            </Fade>
          </div>
        }
        {isAdmin && 
          <div id="dash-container_9" className="dash-container">
            <Fade bottom>
              <DashTabContainer9 isAdmin={isAdmin} />
            </Fade>
          </div>
        }
        
      </div>
    );
  }
}

export default DashboardTabContainers;
