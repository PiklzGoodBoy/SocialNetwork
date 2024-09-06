import React from 'react'
import style from './ProfileWall.module.css';
import InternalGroup from './InternalGroup/InternalGroup';
import WallModule from './WallModule/WallModule';
import SubmitPostBoxContainer from './SubmitPostBox/SubmitPostBoxContainer';

export default function ProfileWall(props) {

  let posts = props.store.getState().profilePage.posts;

  return (
    <div className={style.ProfileWall}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBoxContainer store={props.store} />
        <WallModule posts={posts} />
      </div>
    </div>
  )
}