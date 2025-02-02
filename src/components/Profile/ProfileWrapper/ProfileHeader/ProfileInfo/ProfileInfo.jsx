import React from "react";
import style from "./ProfileInfo.module.css";

export default function ProfileInfo(props) {
  return (
    <div className={style.ProfileInfo}>
      <h2 className={style.profileInfoUserName}>{props.fullName}</h2>
      <div className={style.profileUserInformation}>{props.info}</div>
    </div>
  );
}
