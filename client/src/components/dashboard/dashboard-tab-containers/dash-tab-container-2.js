import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabContainer({ children, dir }) {
  return (
    <div component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class DashTabContainer2 extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme: docsTheme } = this.props;

    const theme = createMuiTheme({
      palette: {
        type: docsTheme.palette.type,
      },
      direction: docsTheme.direction,
    });

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Upcoming Trips" />
            <Tab label="Past Trips" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <h5>You don't have any planned trips yet</h5>
            <p>Contact a Trip Imagine Consultant now!</p>
            <button>Plan Your Dream Vacation</button>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <h5>You don't have no past planned trips yet</h5>
            <p>Contact a Trip Imagine Consultant now!</p>
            <button>Plan Your Dream Vacation</button>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

DashTabContainer2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashTabContainer2);
