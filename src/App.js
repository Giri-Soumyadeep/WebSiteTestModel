import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Crousel';
import CardBody from './components/CardBody';

import Home from './navigationComponent/Home';
import Aboutus from './navigationComponent/Aboutus';
import ContactUs from './navigationComponent/ContactUs';
import Menu from './navigationComponent/Menu';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div className="App">
      <LoginComponent/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
      </Router> */}
    </div >

  );
}

export default App;
