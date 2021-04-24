import React from 'react';
import { NavLink } from 'react-router-dom';

import { nav, navLink, active } from './Header.module.scss';

export default function Navbar() {
  const routes = [
    {
      route: 'buy',
      name: 'Buy',
    },
    {
      route: 'sell',
      name: 'Sell',
    },
    {
      route: 'rent',
      name: 'Rent',
    },
  ];

  return (
    <nav className={nav}>
      <ul>
        {routes.map((item) => (
          <li key={item.name}>
            <NavLink
              to={`/${item.route}`}
              className={navLink}
              activeClassName={active}
              aria-current="page"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
