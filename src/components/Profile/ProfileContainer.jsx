import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile_reducer";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 31889;
  }
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
