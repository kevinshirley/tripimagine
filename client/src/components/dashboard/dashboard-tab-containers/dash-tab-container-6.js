import React, { Component } from 'react';
import { Button } from '../../common/common-button';

class DashTabContainer6 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        Settings
        <br/>
        <br/>
        <div className="delete-account">
          <small className="form-text text-muted">Account</small>
          <br/>
          <Button name="Delete My Account" icon="delete" info="You won't be able to come back" />
        </div>
      </div>
    );
  }
}

export default DashTabContainer6;
