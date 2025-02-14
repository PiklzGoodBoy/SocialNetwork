import React from "react";
import style from "./ProfileWrapper.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileLayoutSplit from "./ProfileLayoutSplit/ProfileLayoutSplit";

export default function ProfileWrapper(props) {
  return (
    <div className={style.ProfileWrapper}>
      <ProfileHeader profile={props.profile} />
      <ProfileLayoutSplit posts={props.posts} />
    </div>
  );
}
