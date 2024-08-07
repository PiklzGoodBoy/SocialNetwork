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


import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(props) {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <LeftBar />
        <div className={style.app_wrapper_content}>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='profile' element={<Profile state={props.state.profilePage} />}
            />
            <Route path='dialogs' element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path='news' element={<News />} />
            <Route path='friends' element={<Friends />} />
            <Route path='community' element={<Community />} />
            <Route path='music' element={<Music />} />
            <Route path='videos' element={<Videos />} />
            <Route path='games' element={<Games />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
