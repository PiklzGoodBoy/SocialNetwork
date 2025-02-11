import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthUserData, setAuthUserInfo } from "../../redux/auth_reducer";
import Header from "./Header";
import { getLogin, getProfile } from "../../api/api";

function HeaderContainer(props) {
  // if (!userId) {
  //   userId = 2;
  // }
  useEffect(() => {
    getLogin().then((data) => {
      if (data.resultCode === 0) {
        props.setAuthUserData(data.data);
        let userId = data.data.id;
        getProfile(userId).then((data) => {
          props.setAuthUserInfo(data);
        });
      }
    });
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
export default connect(mapStateToProps, { setAuthUserData, setAuthUserInfo })(
  HeaderContainer
);
