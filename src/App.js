import './App.css';
import React, { Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'

import HomePage from './pages/Home/HomePage';
import Navbar from './components/shared/Navbar';
import About from './pages/About/About';
import Location from './pages/Location/Location';
import Resources from './pages/Resources/Resources';
import Footer from './components/shared/Footer'
import Donation from './pages/Donation/Donation';


function App() {

  return (
    <Fragment>
      <Navbar /> 
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/about'
          element={<About/>}
        />
        <Route
          path='/location'
          element={<Location/>}
        />
         <Route
          path='/resources'
          element={<Resources/>}
        />
        <Route 
          path="/donation" 
          element={<Donation/>} 
          />
      
      </Routes>
      <Footer /> 
    </Fragment>
  )
}

export default App;
