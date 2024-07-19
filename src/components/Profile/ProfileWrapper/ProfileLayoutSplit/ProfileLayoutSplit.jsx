import React from 'react'
import style from './ProfileLayoutSplit.module.css'
import ProfileWall from './ProfileWall/ProfileWall'
import ProfielRightCol from './ProfileRightCol/ProfielRightCol'

const ProfileLayoutSplit = () => {
    return (
        <div className={style.ProfileLayoutSplit}>
            <ProfileWall/>
            <ProfielRightCol/>
        </div>
    )
}

export default ProfileLayoutSplit