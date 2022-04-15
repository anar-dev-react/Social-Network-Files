import React from 'react';
import c from "./Header.module.css"
import logo from "./../../assets/uisimg_18100.png";
import searchIcon from "./../../assets/search.png"
import AuthContainer from '../Auth/AuthContainer';

export const Header = (props) => {
  return <div className={c.header}>
    <div className={c.logo}>
      <img src={logo} alt='logo' />
    </div>
    <div className={c.search}>
      <form className={c.search__form}>
        <input type="search" name="search" className={c.search} />
      </form>
      <img src={searchIcon} alt='search' className={c.search__icon} />
    </div>
    <div className={c.auth}>
      <div className={c.login}><AuthContainer /></div>
    </div>
  </div>;
};
