import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [{
  name: 'Home',
  href: '/',
  exact: true,
}, {
  name: 'About',
  href: '/about',
  exact: false,
}];

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="navbar-brand">Note App</div>

    <ul className="navbar-nav">
      {links.map(({ name, href, exact }) => (
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={href}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
