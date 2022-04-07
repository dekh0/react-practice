import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import React from 'react';

function NavBar() {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>
          profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>
          dialogs
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>
          news
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>
          music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>
          settings
        </NavLink>
      </div>

    </div>
  );
}

export default NavBar;
