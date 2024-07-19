import './App.module.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import style from './App.module.css';
import LeftBar from './components/LeftBar/LeftBar';

function App() {
  return (
    <div className={style.App}>
        <Header/>
        <Profile/>
        <LeftBar/>
    </div>
  );
}

export default App;

