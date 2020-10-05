import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = function() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/page1'>Page 1</NavLink>
        </li>
        <li>
          <NavLink to='/page2'>Page 2</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
