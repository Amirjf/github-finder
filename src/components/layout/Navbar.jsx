import React from 'react';
import { FiGithub, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <FiMenu className="text-xl mr-5" />
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <FiGithub size={30} className="inline" />
          <span className="font-bold pl-2">GitHub Finder</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-disabled">Welcome</button>
      </div>
    </div>
  );
};

export default Navbar;
