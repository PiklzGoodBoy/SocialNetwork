import './App.module.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import style from './App.module.css';
import LeftBar from './components/LeftBar/LeftBar';
import Dialogs from './components/Diaologs/Dialogs';

function App() {
  return (
    <div className={style.app_wrapper}>
        <Header/>
        <LeftBar/>
      <div className={style.app_wrapper_content}>
        <Dialogs/>
        {/* <Profile/> */}
      </div>
    </div>
  );
}

export default App;

