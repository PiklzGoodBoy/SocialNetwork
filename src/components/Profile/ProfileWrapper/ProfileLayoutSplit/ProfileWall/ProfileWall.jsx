import React from 'react'
import style from './ProfileWall.module.css';
import InternalGroup from './InternalGroup/InternalGroup';
import SubmitPostBox from './SubmitPostBox/SubmitPostBox';
import WallModule from './WallModule/WallModule';

const ProfileWall = (props) => {

  
  return (
    <div className={style.ProfileWall}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBox/>
        <WallModule postData={props.postData}/>
      </div>
    </div>
  )
}

export default ProfileWall