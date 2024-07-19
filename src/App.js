import './App.module.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
        <Header/>
        <Profile/>
    </div>
  );
}

export default App;

