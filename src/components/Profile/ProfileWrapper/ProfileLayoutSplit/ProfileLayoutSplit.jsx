import React from 'react'
import style from './ProfileLayoutSplit.module.css'
import ProfileWall from './ProfileWall/ProfileWall'
import ProfielRightCol from './ProfileRightCol/ProfielRightCol'

const ProfileLayoutSplit = (props) => {
  
    return (
        <div className={style.ProfileLayoutSplit}>
            <ProfileWall postData={props.postData}/>
            <ProfielRightCol/>
        </div>
    )
}

export default ProfileLayoutSplit