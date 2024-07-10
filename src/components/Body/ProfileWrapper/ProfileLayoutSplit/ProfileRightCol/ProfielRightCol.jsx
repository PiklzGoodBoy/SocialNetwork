import React from 'react'
import style from './ProfileRightCol.module.css'

const ProfielRightCol = () => {
  return (
    <div className={style.ProfielRightCol}>
      <div className={style.ScrollStickyWrapper}>
        <div className={style.ProfileFriends}>
          Friends
        </div>
        <div className={style.ProfileSubscriptions}>
          Subscriptions
        </div>
        <div className={style.ProfileVideos}>
          Videos
        </div>
      </div>
    </div>
  )
}

export default ProfielRightCol