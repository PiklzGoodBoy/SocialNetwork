import React from 'react'
import style from './ScrollStickyWrapper.module.css'
import PrfoileFriends from './ProfileFriends/ProfileFriends'
import ProfileSubscriptions from './ProfileSubscriptions/ProfileSubscriptions'
import ProfileVideos from './ProfileVideos/ProfileVideos'

export default function ScrollStickyWrapper  ()  {
  return (
    <div className={style.ScrollStickyWrapper}>
      <PrfoileFriends/>
      <ProfileSubscriptions/>
      <ProfileVideos/>
    </div>
  )
}