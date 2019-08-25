import React, { Component } from 'react';
import { ButtonUrl } from '../../common/common-button';
import {Table, HeadCell, Cell, Row, HeadRow} from '../../common/table';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../../actions/profileActions';

class DashTabContainer8 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  get allProfiles() {
    return (!this.props.isAdmin ? false : this.props.getAllProfiles());
  }

  componentDidMount() {
    this.allProfiles;
    // console.log(this.props.isAdmin);
    // console.log(this.props.profiles);
  }

  render() {
    const profiles = this.props.isAdmin ? this.props.profile.profiles : null;
    // console.log(profiles);
    return (
      <div className="dash-tab-container-8">
        <span>Profiles</span>
        <br />
        <div className="all-profiles-containers">
          <Table>
            <HeadRow>
              <HeadCell>#</HeadCell>
              <HeadCell>Name</HeadCell>
              <HeadCell>Email</HeadCell>
              <HeadCell>Phone Number</HeadCell>
              <HeadCell>Option</HeadCell>
            </HeadRow>
            {profiles && profiles.map((profile,i) => {
              return (
                <Row key={i}>
                  <Cell>{i+1}</Cell>
                  <Cell>{profile.user.name}</Cell>
                  <Cell>{profile.user.email}</Cell>
                  <Cell>{profile.phoneNumber}</Cell>
                  <Cell><ButtonUrl name="Details" url={"/dashboard/profile/"+profile._id} icon="keyboard_arrow_right" /></Cell>
                </Row>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}

DashTabContainer8.proptypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  profiles: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getAllProfiles })(DashTabContainer8);
