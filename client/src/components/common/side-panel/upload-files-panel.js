import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../common-button';
import SelectListGroup from '../select-list-group';
import { uploadFIle, getFiles } from '../../../actions/fileActions';

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
      categoryLabel: '',
      userFiles: {},
      showSuccessMessage: false,
      errors: {}
    };

    // refs
    this.fileRef = React.createRef();
    this.categoryRef = React.createRef();

    // bind this
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    let userId = this.props.profile.profile.user._id;
    let tripId = this.props.tripID;

    formData.append('document', document);
    formData.append('handle', userHandle);
    formData.append('category', category);
    formData.append('labelValue', labelValue);
    formData.append('userId', userId);
    formData.append('tripId', tripId);

    if (Object.keys(document).length === 0 && document.constructor === Object) {
      toast.warn("File is missing", {
        position: toast.POSITION.TOP_RIGHT,
        background: 'red'
      });
    } else if (category === "0") {
      toast.warn("Category is missing", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      this.setState({ showSuccessMessage: true });
      this.props.uploadFIle(formData);
      // reset values
      this.fileRef.current.value = null;
      this.setState({ document: {} });
      this.categoryRef.current.value = Number(0);
    }
  }

  componentDidMount() {
    let userId = this.props.profile.profile.user._id;
    this.props.getFiles(userId);
  }

  render() {
    const { errors } = this.state;
    const { file } = this.props.file;
    return (
      <section className="upload-files-panel">
        <div className="overlay">

          <form action="/files/upload" onSubmit={this.onSubmit} encType="multipart/form-data">
            <small>Upload any file needed for your Trip</small>
            <br/>
            <br/>
            <div className="uploading-container">
              <input 
                onChange={this.onInputChange} 
                id="upload-input" 
                name="document" 
                type="file" 
                ref={this.fileRef} 
              />
              {errors.name && (
                <small className="trip-invalid-feedback">{errors.name}</small>
              )}
            </div>
            <br/>
            <br/>
            <SelectListGroup 
              name="category"
              value={this.state.category}
              options={categoryOptions}
              onChange={this.onChange}
              error={errors.category}
              id="upload-category"
              htmlFor="upload-category"
              ref={this.categoryRef}
            />
            <br/>
            {file.success && (
              <small style={{ display: this.state.showSuccessMessage ? 'block' : 'none', color: 'green' }} className="trip-success-feedback">{file.success} <i class="material-icons" style={{cursor: 'pointer', paddingTop: '5px'}} onClick={() => this.setState({ showSuccessMessage: false })}>close</i></small>
            )}
            <ToastContainer />
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
  getFiles: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  file: state.file,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { uploadFIle, getFiles })(UploadFilesPanel);