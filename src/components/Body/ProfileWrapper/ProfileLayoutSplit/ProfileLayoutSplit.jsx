import React from 'react'
import style from './ProfileLayoutSplit.module.css'
import ProfileWell from './ProfileWell/ProfileWell'
import ProfielRightCol from './ProfileRightCol/ProfielRightCol'

const ProfileLayoutSplit = () => {
    return (
        <div className={style.ProfileLayoutSplit}>
            <ProfileWell/>
            <ProfielRightCol/>
        </div>
    )
}

export default ProfileLayoutSplit