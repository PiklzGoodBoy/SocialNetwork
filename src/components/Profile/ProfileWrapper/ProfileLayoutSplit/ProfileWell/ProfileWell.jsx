import React from 'react'
import style from './ProfileWell.module.css';
import InternalGroup from './InternalGroup/InternalGroup';
import SubmitPostBox from './SubmitPostBox/SubmitPostBox';
import WallModule from './WallModule/WallModule';

const ProfileWell = () => {
  return (
    <div className={style.ProfileWell}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBox/>
        <WallModule/>
      </div>
    </div>
  )
}

export default ProfileWell