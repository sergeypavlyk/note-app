import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [{
  id: 0,
  name: 'Home',
  href: '/',
  exact: true,
}, {
  id: 1,
  name: 'About',
  href: '/about',
  exact: false,
}];

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="navbar-brand">Note App</div>
    <ul className="navbar-nav">
      {links.map(({
        name,
        href,
        exact,
        id,
      }) => (
        <li className="nav-item" key={id}>
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
