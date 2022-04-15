import React from 'react';
import c from "./Schoolmates.module.css";
import avatar from "./../../assets/avatar.png"
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import eventImage from "./../../assets/intel_core_i9_12900ks_1_16x9.jpg.rendition.intel.web.1648.927.jpg"
import event2Image from "./../../assets/unnamed.jpg"

export const Schoolmates = (p) => {
    let pages = Math.ceil(p.totalCount / p.pageSize);
    let pagesArray = [];
    let portionSize = 20;
    let portionCount = Math.ceil(pages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
    }

    const setPrevPortion = () => {
        setPortionNumber(portionNumber - 1)
    }
    const setNextPortion = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (<div className={c.schoolmates}>
        <div className={c.left__side}>
            <div className={c.pages} >
                {portionNumber > 1 && <button className={c.mapping__button} onClick={setPrevPortion}>Prev</button>}
                {pagesArray.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map((m) => {
                        return (
                            <span key={m.id} onClick={() => { p.setCurrentPage(m) }} className={p.currentPage === m ? c.active : c.page}>{m}</span>
                        )
                    })}
                {portionNumber < portionCount && <button className={c.mapping__button} onClick={setNextPortion}>Next</button>}
            </div>
            <div className={c.schoolmate}>
                {p.users.map(m =>
                    <div className={c.user} key={m.id}>
                        <div className={c.avatar}><NavLink to={"Profile/" + m.id}> {m.photos.small ? <img src={m.photos.small}  key={m.id}/> : <img src={avatar}  key={m.id}/>}</NavLink></div>
                        <div className={c.name}>{m.name}</div>
                        <div className={c.follow}>
                            {m.followed ?
                                <button className={c.followed} key={m.id} disabled={p.disabled.some(id => id === m.id)}
                                    onClick={() => {
                                        p.disabledToggle(true, m.id)
                                        { p.unFollow(m.id) }
                                        p.disabledToggle(false, m.id)
                                    }}>unfollow</button>
                                : <button  key={m.id} disabled={p.disabled.some(id => id === m.id)}
                                    onClick={() => {
                                        p.disabledToggle(true, m.id)
                                        { p.follow(m.id) }
                                        p.disabledToggle(false, m.id)
                                    }}>follow</button>}
                        </div>
                    </div>
                )}
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
    </div>);
};
