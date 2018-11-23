import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../common-button';
import SelectListGroup from '../select-list-group';
import { uploadFIle } from '../../../actions/fileActions';

const categoryOptions = [
  { value: 0, label: 'Select a category' },
  { value: 1, label: 'Itinerary' },
  { value: 2, label: 'Financial' },
  { value: 3, label: 'Reservation' },
  { value: 4, label: 'Booking' },
  { value: 5, label: 'Other' }
];

class UploadFilesPanel extends Component {
  constructor() {
    super();

    this.state = {
      document: {},
      category: '0',
      categoryLabel: ''
    };

    this.fileRef = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onInputChange = (e) => {
    switch (e.target.name) {
      case 'document':
        this.setState({ document: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onUpload(e) {
    e.preventDefault();

    let formData = new FormData();
    const { document, category } = this.state;
    const userHandle = this.props.profile.profile.handle;
    let labelValue = categoryOptions.filter(obj => obj.value === Number(this.state.category));
    labelValue = labelValue[0].label;

    formData.append('document', document);
    formData.append('handle', userHandle);
    formData.append('category', category);
    formData.append('labelValue', labelValue);

    if (this.state.category === "0") {
      console.log("Error: You need to select a category");
    } else {
      this.props.uploadFIle(formData);
    }
  }

  render() {
    let selectedCategory = categoryOptions.filter(obj => obj.value === Number(this.state.category));
    return (
      <section className="upload-files-panel">
        <div className="overlay">

          <form action="/files/upload" onSubmit={this.onSubmit} encType="multipart/form-data">
            <small>Upload any file needed for your Trip</small>
            <br/>
            <br/>
            <br/>
            <input onChange={this.onInputChange} name="document" type="file" ref={this.fileRef} />
            <br/>
            <br/>
            <SelectListGroup 
              name="category"
              value={this.state.category}
              options={categoryOptions}
              onChange={this.onChange}
              error=""
              id="upload-category"
              htmlFor="upload-category"
              labelValue={selectedCategory[0].label}
            />
            <br/>
            <br/>
            <Button name="Upload" icon="cloud_upload" onClick={this.onUpload}  />
          </form>
          
        </div>
      </section>
    );
  }
}

UploadFilesPanel.propTypes = {
  uploadFIle: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  file: state.file,
  profile: state.profile
});

export default connect(mapStateToProps, { uploadFIle })(UploadFilesPanel);