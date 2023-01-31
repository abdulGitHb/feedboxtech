import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar2/Navbar';
import AboutUs from './components/AboutUsFullPage/AboutUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeComp from './components/HomeComp';


function App() {


  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeComp/>}/>
          <Route path='/aboutUsFull' element={<AboutUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;