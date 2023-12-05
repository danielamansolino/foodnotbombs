import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import {Route, Routes} from 'react-router-dom'

import HomePage from './pages/Home/HomePage';
import Navbar from './components/shared/Navbar';
import PlaceholderPage from './pages/Placeholder/PlaceholderPage'


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
          path='/donate'
          element={<PlaceholderPage pageName='Donate' />}
        />
      
      </Routes>
    </Fragment>
  )
}

export default App;
