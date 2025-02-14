import React from "react";
import style from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function Dialogs(props) {
  if (!props.isAuth) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className={style.dialogs}>
      <DialogsList />
      <Messages

      // newMessagesBody={state.newMessagesBody}
      // dispatch={props.dispatch}
      />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);
export default DialogsContainer;
