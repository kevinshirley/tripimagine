import React, { Component } from 'react';
import { Button } from '../common-button';

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
    console.log(currentUpload);
  }

  render() {
    return (
      <section className="download-files-panel">
        <div className="overlay">

          <form>
            <small>Upload any file needed for your Trip</small>
            <br/>
            <br/>
            <input name="file" type="file" ref={this.fileRef} />
            <br/>
            <br/>
            <Button name="Upload" icon="cloud_upload" onClick={this.onUpload}  />
          </form>
          
        </div>
      </section>
    );
  }
}

export default UploadFilesPanel;