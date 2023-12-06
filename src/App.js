import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'

import HomePage from './pages/Home/HomePage';
import Navbar from './components/shared/Navbar';
import PlaceholderPage from './pages/Placeholder/PlaceholderPage'
import About from './pages/About/About';
import Location from './pages/Location/Location';
import Resources from './pages/Resources/Resources';
import Footer from './components/shared/Footer'


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
          path='/donate'
          element={<PlaceholderPage pageName='Donate' />}
        />
      
      </Routes>
      <Footer /> 
    </Fragment>
  )
}

export default App;
