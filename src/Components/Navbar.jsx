import React from 'react';
import { Link, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Navbar = () => {

    const activeStyle = "text-violet-600 font-semibold border-b-2 border-violet-600 pb-1";
  const normalStyle = "text-gray-700 hover:text-violet-600 transition";
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>
        <NavLink to='/' className={({isActive})=>(isActive ? activeStyle :normalStyle)}>Home</NavLink>
        </li>
          <li>
        <NavLink to='/app' className={({isActive})=>(isActive ? activeStyle :normalStyle)}>Apps</NavLink>
        </li>
          <li>
        <NavLink to='/install' className={({isActive})=>(isActive ? activeStyle :normalStyle)}>Installation</NavLink>
        </li>
      </ul>
    </div>
    <Link to='/' className="btn  text-xl">
    <img src="https://i.ibb.co.com/V0qgB0hm/logo.png" className='h-5 w-5' alt="" />
    HERO.IO</Link>
  </div>
  <div className="navbar-center">
   
  </div>
  <div className="navbar-center ">
  

     <ul className="menu menu-horizontal px-1  hidden lg:flex">
      <li>
        <NavLink to='/' className={({isActive})=>(isActive ? activeStyle :normalStyle)}>Home</NavLink>
        </li>
          <li>
        <NavLink to='/app' className={({isActive})=>(isActive ? activeStyle :normalStyle)}>Apps</NavLink>
        </li>
          <li>
        <NavLink to='/install'className={({isActive})=>(isActive ? activeStyle :normalStyle)}>Installation</NavLink>
        </li>
        </ul>

    
   
  </div>
  <div className=' navbar-end'>
      <NavLink to={'https://github.com/Badsha012'} className='btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]'> <FontAwesomeIcon icon={faGithub} className="mr-2" />
Contribute</NavLink>
  </div>
</div>
    );
};

export default Navbar;