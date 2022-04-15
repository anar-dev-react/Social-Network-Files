import React from 'react';
import c from "./Profile.module.css"
import defaultImg from "./../../assets/avatar.png"
import StatusWithHooksContainer from './Status/StatusWithHooksContainer';
import emptyImage from "./../../assets/images.png";
import like from "./../../assets/heart.png";
import myPostImage from "./../../assets/HbS0b.jpg"
import eventImage from "./../../assets/intel_core_i9_12900ks_1_16x9.jpg.rendition.intel.web.1648.927.jpg"
import event2Image from "./../../assets/unnamed.jpg"
import ContactFormContainer from './ContactForm/ContactFormContainer';
import { useState } from 'react';

export const Profile = (props) => {

  let [editMode, editModeFunc] = useState(false);
  const [text,getText]=useState();
  const sendPost=()=>{
    props.addPostToPage({name:"Me",post:text,id:5})
     getText('');
  }
  const onSubmit = (data) => {
    props.contact(data);
    editModeFunc(false)
  }
  if (!props.getProfileInfo) {
    return (
      props.isFetching === true
    )
  }
  const changeMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  const showText = () => {
    props.showTextFunction(true)
  }
  const clearText = () => {
    props.showTextFunction(false)
  }
  return (
    <div>
      {props.isFetching ? <p>is Fetching</p> :
        <div className={c.profile}>
          <div className={c.left__side}>
            <div className={c.profile__information}>
              <div className={c.photo__container}>
                {props.getProfileInfo.photos.small
                  ? <div className={c.profileImg}><img src={props.getProfileInfo.photos.large} /></div>
                  : <div className={c.profileImg}><img src={defaultImg} alt="default image" /></div>}
                <div className={c.changeImg}>{props.isOwner && <input type="file" onChange={changeMainPhotoSelected} name="change image" />}</div>
              </div>
              <div className={c.profile__info}>
                {editMode ? <div><ContactFormContainer onSubmit={onSubmit} /></div> : <div>
                  {props.isOwner && <button className={c.edit__button} onClick={() => editModeFunc(true)}>Edit Info</button>}
                  <p>Name:</p><span> {props.getProfileInfo.fullName}</span>
                  <p>Looking For A Job:</p> {props.getProfileInfo.lookingForAJob ? <span>Yes</span> : <span>No</span>}
                  <p>Professional Skills: </p>{props.getProfileInfo.lookingForAJobDescription ? <span>{props.getProfileInfo.lookingForAJobDescription}</span> : <span>No Info</span>}
                  <p>About Me: </p>{props.getProfileInfo.aboutMe ? <span>{props.getProfileInfo.aboutMe}</span> : <span>No Info</span>}
                </div>}
              </div>
            </div>
          </div>
          <div className={c.middle__side}>
            <div className={c.status}>
              <span className={c.status__label}>STATUS</span>
              <div className={c.status__text}><p>{props.isOwner ? <StatusWithHooksContainer /> : props.status}</p>
              </div>
            </div>
            <div className={c.images} onMouseOver={showText} onMouseLeave={clearText}>
              <img src={emptyImage} className={c.image} />
              <img src={emptyImage} className={c.image} />
              <img src={emptyImage} className={c.image} />
              <img src={emptyImage} className={c.image} />
              {props.showText && <b className={c.image__information}>Because Of The Server You Can't Add a Photo At The Moment</b>}
            </div>
            <div className={c.posts__container}>
              <div className={c.post__theme}>
                <img src={myPostImage} />
                <div className={c.post__theme__text}>
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sint similique neque quia, sapiente excepturi quos eveniet error consectetur doloribus. Culpa earum obcaecati nemo sit voluptates! Dolore saepe magnam facilis!</span>
                </div>
              </div>
              <div className={c.comment__container}>
                {props.posts.map(m =>
                  <div className={c.comment}>
                    <img src={defaultImg} className={c.comment__img} />
                    <span className={c.comment__name}>{m.name}</span>
                    <span className={c.comment__text}>{m.post}</span>
                    <span className={c.comment__like}><button ><img src={like} className={c.comment__like__icon} /></button> {m.like}</span>
                  </div>
                )}
                <input type={"text" } value={text} placeholder="add comment" className={c.comment__input}  onChange={(e)=>getText(e.currentTarget.value)}/>
                <button onClick={()=>sendPost()} className={c.add__comment}>Add Post</button>
              </div>
            </div>
          </div>
          <div className={c.right__side}>
            <div className={c.event}>
              <img src={eventImage} alt="event image" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi tempore nesciunt dolores minima, quas qui quidem vitae impedit? Eos id blanditiis omnis iusto, iste provident temporibus voluptatem soluta illo.</span>
            </div>
            <div className={c.event}>
              <img src={event2Image} alt="event image" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi tempore nesciunt dolores minima, quas qui quidem vitae impedit? Eos id blanditiis omnis iusto, iste provident temporibus voluptatem soluta illo.</span>
            </div>
          </div>
        </div>
      }</div>
  )
};
