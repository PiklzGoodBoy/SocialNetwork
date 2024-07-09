import './App.module.css';
import Header from './components/Header/Header';
import Body from "./components/Body/Body";
import Footer from './components/Footer/Footer';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;

