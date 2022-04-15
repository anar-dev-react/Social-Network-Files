import React from 'react';
import c from "./Auth.module.css";
import { NavLink } from "react-router-dom"
export const Auth = (p) => {

  return (
    <div className={c.auth}>
      {p.isAuth
        ? <div>
          <span className={c.loginName}>{p.login}</span>
          <div className={c.logout} onClick={() => p.reloadFunc(false)}><button onClick={p.logout}>Logout</button></div>
        </div>
        : <div>
          <div ><NavLink to="/Login"><p className={c.login__span} >Login</p></NavLink></div>
        </div>
      }
    </div>);
};
