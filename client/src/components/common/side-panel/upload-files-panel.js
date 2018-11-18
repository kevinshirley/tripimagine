import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../common-button';
import { uploadFIle } from '../../../actions/fileActions';

class UploadFilesPanel extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.fileRef = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onUpload(e) {
    e.preventDefault();

    // const data = new FormData();
    // this.uploadInput.files[0]
    // data.append('file', this.fileRef.current);
    let currentUpload = this.fileRef.current.files[0];
    let targetFile = document.getElementById('uploadedFile');
    let obj = {
      file: currentUpload,
      targetFile: targetFile,
      filename: 'imageUploaded',
      upload: true
    };
    // console.log(currentUpload);
    this.props.uploadFIle(obj);
  }

  render() {
    return (
      <section className="upload-files-panel">
        <div className="overlay">

          <form onSubmit={this.onSubmit}>
            <small>Upload any file needed for your Trip</small>
            <br/>
            <br/>
            <input id="uploadedFile" name="file" type="file" ref={this.fileRef} />
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