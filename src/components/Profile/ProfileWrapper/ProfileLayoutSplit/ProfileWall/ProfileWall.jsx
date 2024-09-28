import React from 'react'
import style from './ProfileWall.module.css';
import InternalGroup from './InternalGroup/InternalGroup';
import WallModule from './WallModule/WallModule';
import SubmitPostBoxContainer from './SubmitPostBox/SubmitPostBoxContainer';
import { connect } from 'react-redux';

function ProfileWall(state) {

  return (
    <div className={style.ProfileWall}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBoxContainer />
        <WallModule state={state} />
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}
const ProfileWallContainer = connect(mapStateToProps)(ProfileWall);


export default ProfileWallContainer; 