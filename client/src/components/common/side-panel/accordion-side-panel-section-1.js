import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FilesPanel from './files-panel';
import UploadFilesPanel from './upload-files-panel';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '1em',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class AccordionSidePanelSection1 extends Component {

  render() {
    return (
      <div className="file-table">
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <h5>Files</h5>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <FilesPanel />

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <h5>Upload Files</h5>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <UploadFilesPanel />

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <h5>Other</h5>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>If needed, this section will display any other content</p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(AccordionSidePanelSection1);