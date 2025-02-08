import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth_reducer";
import Header from "./Header";

function HeaderContainer(props) {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          // let { id, login, email } = response.data.data;
          props.setAuthUserData(response.data.data);
        }
      });
  }, []);
  return (
    <Header
      {...props}
      //   setAuthUserData={props.setAuthUserData}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
