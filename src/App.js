import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login/Login';

import './style.scss'


function App() {
  return (
    <BrowserRouter>
    <Header/>
  <Routes>
   
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>

  </Routes>    
  <Footer/>
    </BrowserRouter>
  )
}

export default App;
