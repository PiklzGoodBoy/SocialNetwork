import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile_reducer";

const ProfileContainer = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 31889;
  }
  useEffect(() => {
    props.getUserProfile(userId);
  }, []);

  if (!props.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Profile {...props} profile={props.profile} />;
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
