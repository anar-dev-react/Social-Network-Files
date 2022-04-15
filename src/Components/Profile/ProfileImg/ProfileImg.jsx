import React from 'react';
import c from "./ProfileImg.module.css";
import fakeProfile from "./../../../assets/fake.jpg";

export const ProfileImg = () => {
  return (
    <div className={c.profileImg}>
    <img src={fakeProfile} alt="profile photo"/>
    <input type="button" value={"Change Photo"} className={c.changeImgButton}/>
  </div>
  );
};
