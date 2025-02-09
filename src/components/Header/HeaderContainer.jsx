import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, setAuthUserInfo } from "../../redux/auth_reducer";
import Header from "./Header";

function HeaderContainer(props) {
  // if (!userId) {
  //   userId = 2;
  // }
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          // let { id, login, email } = response.data.data;
          props.setAuthUserData(response.data.data);
          let idAuthUser = response.data.data.id;
          axios
            .get(
              `https://social-network.samuraijs.com/api/1.0/profile/${idAuthUser}`
            )
            .then((response) => {
              props.setAuthUserInfo(response.data);
            });
        }
      });
  }, []);
  return (
    <Header
      {...props}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.id,
  photoSmall: state.auth.photoSmall,
});
export default connect(mapStateToProps, { setAuthUserData, setAuthUserInfo })(
  HeaderContainer
);
