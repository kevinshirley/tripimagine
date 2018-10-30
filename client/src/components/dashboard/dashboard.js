import React, { Component } from 'react';
import DashboardSection1 from './dashboard-section-1';
import DashboardSection2 from './dashboard-section-2';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <main className="dashboard">
        <DashboardSection1 />
        <DashboardSection2 />
      </main>
    );
  }
}

export default Dashboard;
