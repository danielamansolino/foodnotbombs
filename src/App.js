import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'

import HomePage from './pages/Home/HomePage';
import Navbar from './components/shared/Navbar';


function App() {
  // return (
  //   <Fragment>
      
  //     <HomePage />
  //   </Fragment>
  // )
  return (
    <Fragment>
      <Navbar /> 
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
      
      </Routes>
    </Fragment>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
