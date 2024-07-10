import React from 'react'
import style from './ProfileWell.module.css';

const ProfileWell = () => {
  return (
    <div className={style.ProfileWell}>
      <div className={style.SplitCol}>
        <div>InternalGroup</div>
        <div className={style.WallLegasy}>
          <div>PageBlock</div>
          <div>WallModule</div>
        </div>
      </div></div>
  )
}

export default ProfileWell