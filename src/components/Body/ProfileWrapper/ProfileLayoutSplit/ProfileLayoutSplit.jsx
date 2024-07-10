import React from 'react'
import style from './ProfileLayoutSplit.module.css'

const ProfileLayoutSplit = () => {
  return (
    <div>
    <div className={style.SplitCol}>
        <div>InternalGroup</div>
        <div className={style.WallLegasy}>
            <div>PageBlock</div>
            <div>WallModule</div>
        </div>
    </div>
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
</div>  )
}

export default ProfileLayoutSplit