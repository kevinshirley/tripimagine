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
    return (
      <div className="list-group">
        <button className="tab list-group-item list-group-item-action" id="_1" onClick={this.changeTabs}><i className="far fa-user-circle"></i>&nbsp;&nbsp; Profile</button>

        <button className="tab list-group-item list-group-item-action" id="_2" onClick={this.changeTabs}><i className="fas fa-plane"></i>&nbsp;&nbsp; My Trips</button>

        <button className="tab list-group-item list-group-item-action"  id="_3" onClick={this.changeTabs}><i className="far fa-newspaper"></i>&nbsp;&nbsp; Feed</button>

        <button className="tab list-group-item list-group-item-action"  id="_4" onClick={this.changeTabs}><i className="far fa-clock"></i>&nbsp;&nbsp; Search History</button>

        <button className="tab list-group-item list-group-item-action"  id="_5" onClick={this.changeTabs}><i className="far fa-bell"></i>&nbsp;&nbsp; Alerts &amp; Notifications</button>

        <button className="tab list-group-item list-group-item-action"  id="_6" onClick={this.changeTabs}><i className="fas fa-cog"></i>&nbsp;&nbsp; Settings</button>
        
        <button className="tab list-group-item list-group-item-action" id="_7" onClick={this.changeTabs}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout</button>
      </div>
    );
  }
}

export default DashboardTabsMenu;
