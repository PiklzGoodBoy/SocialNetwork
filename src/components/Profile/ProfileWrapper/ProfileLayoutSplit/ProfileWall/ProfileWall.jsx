import React from "react";
import style from "./ProfileWall.module.css";
import InternalGroup from "./InternalGroup/InternalGroup";
import WallModule from "./WallModule/WallModule";
import SubmitPostBoxContainer from "./SubmitPostBox/SubmitPostBoxContainer";

function ProfileWall(props) {
  return (
    <div className={style.ProfileWall}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBoxContainer />
        <WallModule posts={props.posts} />
      </div>
    </div>
  );
}

export default ProfileWall;
