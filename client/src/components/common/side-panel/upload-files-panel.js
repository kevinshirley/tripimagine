import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../common-button';
import { uploadFIle } from '../../../actions/fileActions';

class UploadFilesPanel extends Component {
  constructor() {
    super();

    this.state = {
      avatar: {},
      filename: ''
    };

    this.fileRef = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onInputChange = (e) => {
    switch (e.target.name) {
      case 'avatar':
        this.setState({ avatar: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onUpload(e) {
    e.preventDefault();

    // const data = new FormData();
    // this.uploadInput.files[0]
    // data.append('file', this.fileRef.current);
    // let currentUpload = this.fileRef.current.files[0];
    // // let targetFile = document.getElementById('file');
    // let obj = {
    //   file: currentUpload,
    //   // targetFile: targetFile.name,
    //   filename: 'imageUploaded',
    //   upload: true
    // };

    const { filename, avatar } = this.state;
    let formData = new FormData();

    // formData.append('filename', filename);
    formData.append('avatar', avatar);
    console.log(this.state.filename);
    console.log(this.state.avatar);
    this.props.uploadFIle(formData);
  }

  render() {
    return (
      <section className="upload-files-panel">
        <div className="overlay">

          <form action="/files/upload" onSubmit={this.onSubmit} encType="multipart/form-data">
            <small>Upload any file needed for your Trip</small>
            <br/>
            <br/>
            <input onChange={this.onInputChange} name="avatar" type="file" ref={this.fileRef} />
            <br/>
            <br/>
            <input id="uploadedFilename" onChange={this.onInputChange} name="filename" type="text" ref={this.fileRef} />
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
  file: state.file
});

export default connect(mapStateToProps, { uploadFIle })(UploadFilesPanel);