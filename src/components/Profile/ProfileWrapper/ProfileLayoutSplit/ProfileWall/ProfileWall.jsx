import React from 'react'
import style from './ProfileWall.module.css';
import InternalGroup from './InternalGroup/InternalGroup';
import SubmitPostBox from './SubmitPostBox/SubmitPostBox';
import WallModule from './WallModule/WallModule';

export default function ProfileWall(props) {
  return (
    <div className={style.ProfileWall}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBox
          newPostText={props.newPostText}
          dispatch={props.dispatch}
        />
        <WallModule posts={props.posts}  />
      </div>
    </div>
  )
}