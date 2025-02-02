import React from "react";
import style from "./ProfileHeader.module.css";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import Preloader from "../../../common/preloader/Preloader";

export default function ProfileHeader(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.ProfileHeader}>
      <ProfileImg photo={props.profile.photos.small} />
      <ProfileInfo
        fullName={props.profile.fullName}
        info={props.profile.aboutMe}
        contacts={props.profile.contacts}
      />
      <ProfileSettings />
    </div>
  );
}
