import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile_reducer";
import { getProfile } from "../../api/api";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 31889;
  }
  useEffect(() => {
    getProfile(userId).then((data) => {
      props.setUserProfile(data);
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
