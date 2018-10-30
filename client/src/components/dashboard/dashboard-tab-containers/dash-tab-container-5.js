import React, { Component } from 'react';

class DashTabContainer5 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="notifybytext-container">
          <h5><i className="material-icons">phone_iphone</i> Text Messages</h5>
          <label htmlFor="notifybytext">
            <input type="checkbox" name="notifybytext" id="notifybytext"/>
            &nbsp;&nbsp;Enable notifications from Trip Imagine via text messages
          </label>
        </div>
      </div>
    );
  }
}

export default DashTabContainer5;
