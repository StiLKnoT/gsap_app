import React from 'react';
import './App.css';
import { Routes, Route, NavLink} from 'react-router-dom'
import Rout from './components/Routes/Routes'

function App() {
  return (
    <div className="App">
        <div className='header'>
          <div className='logo'>
            Nurlan <br/> Karshiev
          </div>
          <ul>
            <li>
              <NavLink className='link' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <Rout/>
      
      

    </div>
  );
}

export default App;
