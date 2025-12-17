import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Github } from "lucide-react";

const Navbar = () => {
  const activeStyle =
    "text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1";
  const normalStyle =
    "text-slate-300 hover:text-emerald-400 transition";

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/app" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/install" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Installation
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          Contact
        </NavLink>
      </li>
       <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? activeStyle : normalStyle)}>
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur">
      <div className="navbar mx-auto max-w-9xl px-4">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl border border-white/10 bg-slate-900 p-3 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <img src="https://i.ibb.co.com/V0qgB0hm/logo.png" className="h-6 w-6" alt="logo" />
            HERO.IO
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">{navLinks}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <a
            href="https://github.com/Badsha012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-5 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/25"
          >
            <Github className="h-4 w-4" />
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;