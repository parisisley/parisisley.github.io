import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Footer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;