import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex justify-between py-[4.2rem] px-[2.2rem]  max-w-[140rem] shadow-md '>
  <header>
    <div className='flex gap-10  text-3xl text-[var(--primary-color)] hover:text-[var(--)]  '>
      <div>
        <NavLink to={`/`}><i>Rushi-Mern</i> </NavLink>
      </div>
    </div>
  </header>
  <nav className='flex'>
  <ul  className=' flex gap-16 text-[var(--primary-color)]  text-3xl '>
        <li> <NavLink to={'/'} className={`hover:text-[var(--secondary-color)]  `}>Home</NavLink></li>
       <li> <NavLink to={`/About`} className={`hover:text-[var(--secondary-color)]  `}>About</NavLink></li>
       <li><NavLink to={`/Projects`} className={`hover:text-[var(--secondary-color)]  `}>Projects</NavLink></li>
       <li> <NavLink to={`/Contactus`} className={`hover:text-[var(--secondary-color)]  `}>Contact us</NavLink></li>  
       <li> <NavLink to={`/Register`} className={`hover:text-[var(--secondary-color)]  `}>Sign Up</NavLink></li>  
       <li> <NavLink to={`/Login`} className={`hover:text-[var(--secondary-color)]  `}>Sign In</NavLink></li>  
     </ul>
  </nav>
    
   
   
    </div>
  )
}

export default Navbar;
