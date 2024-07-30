import './App.module.css';
import style from './App.module.css';

import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import LeftBar from './components/LeftBar/LeftBar';
import Dialogs from './components/Diaologs/Dialogs';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Community from './components/Community/Community';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Games from './components/Games/Games';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <LeftBar />
      <div className={style.app_wrapper_content}>
        <Routes>
          {/* <Route path='/' Component={Dialogs} /> */}
          <Route path='dialogs' Component={Dialogs} />
          <Route path='profile' Component={Profile} />
          <Route path='news' Component={News} />
          <Route path='friends' Component={Friends} />
          <Route path='community' Component={Community} />
          <Route path='music' Component={Music} />
          <Route path='videos' Component={Videos} />
          <Route path='games' Component={Games} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

