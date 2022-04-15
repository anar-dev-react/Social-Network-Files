import React from 'react';
import { NavLink } from 'react-router-dom';
import c from "./Sider.module.css"
export const Sider = () => {
  return <div className={c.sider}>
    <NavLink to="/Profile" activeClassName={c.active}>Profile</NavLink>
    <NavLink to="/Dialogs" activeClassName={c.active}>Dialogs</NavLink>
    <NavLink to="/Schoolmates" activeClassName={c.active}>Schoolmates</NavLink>
  </div>;
};
