import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import $ from "jquery";

class DashboardTabsMenu extends Component {
  constructor() {
    super();

    this.state = {
      tabID: ''
    };

    this.changeTabs = this.changeTabs.bind(this);
  }

  changeTabs = (e) => {
    let id = e.target.id;
    let tabs = document.getElementsByClassName('tab');

    for (var i = 0; i < tabs.length; ++i) {
      var item = tabs[i];

      if ($(item).attr('id') !== id) {
        $(item).removeClass('active').addClass('list-group-item-action');
      } else {
        $(item).removeClass('list-group-item-action').addClass('active');
      }
    }

    this.props.onSelectTab(id);
  }

  render() {
    let isAdmin = this.props.isAdmin;
    return (
      <div className="list-group dashboard-tabs-menu">
        <button className="tab list-group-item list-group-item-action" id="_0" onClick={this.changeTabs}><i className="material-icons">home</i>&nbsp;&nbsp; <span className="label">Home</span></button>

        <button className="tab list-group-item list-group-item-action" id="_1" onClick={this.changeTabs}><i className="far fa-user-circle"></i>&nbsp;&nbsp; <span className="label">Profile</span></button>

        {isAdmin && 
          <button className="tab list-group-item list-group-item-action" id="_8" onClick={this.changeTabs}><i className="fas fa-user-circle"></i>&nbsp;&nbsp; <span className="label">All Profiles</span></button>
        }

        <button className="tab list-group-item list-group-item-action" id="_2" onClick={this.changeTabs}><i className="fas fa-plane"></i>&nbsp;&nbsp; <span className="label">My Trips</span></button>

        <button className="tab list-group-item list-group-item-action"  id="_3" onClick={this.changeTabs}><i className="far fa-newspaper"></i>&nbsp;&nbsp; <span className="label">Feed</span></button>

        <button className="tab list-group-item list-group-item-action"  id="_4" onClick={this.changeTabs}><i className="far fa-clock"></i>&nbsp;&nbsp; <span className="label">Search History</span></button>

        <button className="tab list-group-item list-group-item-action"  id="_5" onClick={this.changeTabs}><i className="far fa-bell"></i>&nbsp;&nbsp; <span className="label">Alerts &amp; Notifications</span></button>

        <button className="tab list-group-item list-group-item-action"  id="_6" onClick={this.changeTabs}><i className="fas fa-cog"></i>&nbsp;&nbsp; <span className="label">Settings</span></button>
        
        <button className="tab list-group-item list-group-item-action" id="_7" onClick={this.changeTabs}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp; <span className="label">Logout</span></button>
      </div>
    );
  }
}

export default DashboardTabsMenu;
