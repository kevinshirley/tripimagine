import React, { Component } from 'react';
import DashboardTabsMenu from './dashboard-tabs-menu';
import DashboardTabContainers from './dashboard-tab-containers';

let currentTab;

class DashboardMainContent extends Component {
  constructor() {
    super();

    this.state = {
      tabSelected: ''
    };

    this.selectedTab = this.selectedTab.bind(this);
  }

  selectedTab = (tab) => {
    currentTab = tab;
    this.setState({ tabSelected: currentTab });
    return this.state.tabSelected;
  }

  render() {
    const { name } = this.props.user;
    return (
      <main className="dashboard-main-content">
        <div className="left">
          <DashboardTabsMenu 
            onSelectTab={this.selectedTab}
            isAdmin={this.props.isAdmin}
          />
        </div>

        <div className="right">
          <DashboardTabContainers 
            onTabChange={this.state.tabSelected} 
            name={name} 
            hasProfile={this.props.hasProfile}
            isAdmin={this.props.isAdmin}
          />
        </div>
      </main>
    );
  }
}

export default DashboardMainContent;
