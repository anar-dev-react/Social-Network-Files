import React from 'react'
import { useState } from 'react';
import c from "./Dialogs.module.css"
import { NavLink, Redirect } from "react-router-dom"
import eventImage from "./../../assets/intel_core_i9_12900ks_1_16x9.jpg.rendition.intel.web.1648.927.jpg"
import event2Image from "./../../assets/unnamed.jpg"
import defaultImg from "./../../assets/avatar.png"

export const Dialogs = (props) => {
  const [currentId, changeId] = useState(0);
  const [messageText, takeMessageText] = useState();
  const messageId = 5;

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs}>
        <div className={c.left__side}>
          {props.dialogs.map(m =>
            <div className={c.guest__block}>
              <NavLink activeClassName={c.active} to={`/Dialogs/${m.id}`}><p onClick={() => changeId(m.id)}>{m.name}</p></NavLink>
            </div>
          )}
        </div>
        <div className={c.middle__side}>
          {props.dialogs.map(m =>
            <div >
              <NavLink to={`/Dialogs/${m.id}`}><p onClick={() => changeId(m.id)}></p></NavLink>
              {m.id === currentId &&
                <div className={c.dialog} key={m.id}>
                  {m.messages.map(m =>
                    <div className={c.dialog__block}>
                      {m.id % 2 !== 0 && <div className={c.my__dialog__block}><img src={defaultImg} className={c.defaultImg} /><p> <span>Me: {m.me}</span></p></div>}
                      {m.id % 2 === 0 && <div className={c.guest__dialog__block}><img src={defaultImg} className={c.defaultImg} /><p> <span><span>{m.name}</span>{m.guest}</span></p></div>}
                    </div>)}
                  <input type="text" onChange={(e) => takeMessageText(e.currentTarget.value)} />
                  <button onClick={() => props.addMessage(messageText, messageId, currentId)}>Send</button>
                </div>
              }
            </div>
          )}
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
    </div>
  )
}


