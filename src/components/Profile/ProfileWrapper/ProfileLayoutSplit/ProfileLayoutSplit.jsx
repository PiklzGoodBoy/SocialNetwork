import React from 'react'
import style from './ProfileLayoutSplit.module.css'
import ProfileWall from './ProfileWall/ProfileWall'
import ProfielRightCol from './ProfileRightCol/ProfielRightCol'

export default function ProfileLayoutSplit(props) {
    return (
        <div className={style.ProfileLayoutSplit}>
            <ProfileWall posts={props.posts}/>
            <ProfielRightCol />
        </div>
    )
}