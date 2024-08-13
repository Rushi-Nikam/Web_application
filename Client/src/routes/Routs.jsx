import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from '../page/Home';
import About from '../page/About';
import Contactus from '../page/Contactus';

import Signup from '../page/Signup';
import Signin from '../page/Signin';
import Navbar from '../Components/Navbar';
import Projects from '../page/Projects';

const Routs = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/Login' element={<Signin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routs;
