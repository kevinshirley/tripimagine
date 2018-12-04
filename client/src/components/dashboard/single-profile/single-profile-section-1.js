import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class SingleProfileSection1 extends Component {
  render() {
    let profiles = this.props.profiles;
    let profileID = this.props.profileID;
    return (
      <section className="header-section">
        <div className="overlay">

          <div className="title-container">
            <Fade bottom>
              <div className="content">
                {profiles && profiles.map((profile,i) => {
                  let content;
                  if (profile._id === profileID) {
                    content = (

                      <h2 key={i}>{profile.user.name}'s Profile</h2>
        
                    );
                  }
                  return content;
                })}
              </div>
            </Fade>
          </div>
          
        </div>
      </section>
    );
  }
}

export default SingleProfileSection1;