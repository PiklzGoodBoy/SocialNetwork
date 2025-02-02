import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile_reducer";

const ProfileContainer = (props) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);
  return <Profile {...props} profile={props.profile} />;
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
