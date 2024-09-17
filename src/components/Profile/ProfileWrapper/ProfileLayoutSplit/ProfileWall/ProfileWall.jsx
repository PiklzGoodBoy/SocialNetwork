import {React,useContext} from 'react'
import style from './ProfileWall.module.css';
import InternalGroup from './InternalGroup/InternalGroup';
import WallModule from './WallModule/WallModule';
import StoreContext from '../../../../../StoreContext';
import SubmitPostBoxContainer from './SubmitPostBox/SubmitPostBoxContainer';

export default function ProfileWall(props) {

  const store = useContext(StoreContext);
  let posts = store.getState().profilePage.posts;

  return (
    <div className={style.ProfileWall}>
      <InternalGroup />
      <div className={style.WallLegasy}>
        <SubmitPostBoxContainer />
        <WallModule posts={posts} />
      </div>
    </div>
  )
}