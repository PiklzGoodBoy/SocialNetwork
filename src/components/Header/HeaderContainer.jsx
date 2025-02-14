import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth_reducer";
import Header from "./Header";

function HeaderContainer(props) {
  useEffect(() => {
    props.getAuthUserData();
  }, []);
  return <Header {...props} />;
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.id,
  photoSmall: state.auth.photoSmall,
});
export default connect(mapStateToProps, {
  getAuthUserData,
})(HeaderContainer);
