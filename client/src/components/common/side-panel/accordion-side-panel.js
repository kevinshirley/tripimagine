import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import AccordionSidePanelSection1 from './accordion-side-panel-section-1';
// import AccordionSidePanelSection2 from './accordion-side-panel-section-2';

class AccordionSidePanel extends Component {
  render() {
    return (
      <section className="accordion-side-panel">
        <div className="overlay">

          <AccordionSidePanelSection1 tripID={this.props.tripID}/>
          {/* <AccordionSidePanelSection2/> */}
          
        </div>
      </section>
    );
  }
}

export default AccordionSidePanel;