import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {Table, HeadCell, Cell, Row, HeadRow} from '../table';
import { Button } from '../common-button';
import isEmpty from '../../../validation/is-empty';
import { getFiles } from '../../../actions/fileActions';

const categoryOptions = [
  { value: 0, label: 'Select a category' },
  { value: 1, label: 'Itinerary' },
  { value: 2, label: 'Financial' },
  { value: 3, label: 'Reservation' },
  { value: 4, label: 'Booking' },
  { value: 5, label: 'Other' }
];

class FilesPanel extends Component {
  constructor() {
    super();

    this.state = {
      userFiles: {},
      errors: {}
    };
  }

  displayFiles(files) {
    let mainContent;
    mainContent = (!isEmpty(files) ? files.map((f, i) => {
      let cat;
      cat = categoryOptions.filter(obj => f.category === obj.value);
      let dateTime = moment(f.dateWhen);
      dateTime = dateTime.startOf('hour').fromNow();
      let content = (

        <Row key={i}>
          <Cell>{f.name}</Cell>
          <Cell>{cat[0].label}</Cell>
          <Cell>{dateTime}</Cell>
          <Cell><Button name="Download" icon="get_app" /></Cell>
        </Row>

      );
      return content;
    }) : <Row><Cell>There's no files uploaded yet</Cell><Cell>{/*empty*/}</Cell><Cell>{/*empty*/}</Cell><Cell>{/*empty*/}</Cell></Row>);
    return mainContent;
  }

  componentDidMount() {
    let userId = this.props.profile.profile.user._id;
    this.props.getFiles(userId);
  }
  
  componentDidUpdate() {
    let userId = this.props.profile.profile.user._id;
    this.props.getFiles(userId);
  }

  render() {
    let data = this.props.file.userFiles;
    let files = [];
    for (let i = 0; i < data.length; i++) {
      files.push(data[i]);
    }
    return (
      <section className="files-panel">
        <div className="overlay">

          <Table>
            <HeadRow>
              <HeadCell>File</HeadCell>
              <HeadCell>Category</HeadCell>
              <HeadCell>Date</HeadCell>
              <HeadCell>Option</HeadCell>
            </HeadRow>
            <tbody>
              {files && this.displayFiles(files)}
            </tbody>
          </Table>
          
        </div>
      </section>
    );
  }
}

FilesPanel.propTypes = {
  getFiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  file: state.file,
  errors: state.errors
});

export default connect(mapStateToProps, { getFiles })(FilesPanel);