import React, { Component } from 'react';

class UploadFilesPanel extends Component {
  render() {
    return (
      <section className="download-files-panel">
        <div className="overlay">

          <form>
            <h6>Upload any file needed for your Trip</h6>
            <br/>
            <input type="file" />
          </form>
          
        </div>
      </section>
    );
  }
}

export default UploadFilesPanel;