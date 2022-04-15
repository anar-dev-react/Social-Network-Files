import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setStatusTC } from "../../../BLL/Reducers/StatusReducer";
import c from "./Status.module.css"


const StatusWithHooksComponent=(props)=>{
    let [editMode,setEditMode]=useState(false)
let [status,setStatus]=useState(props.status)


    const activate=()=>{
        setEditMode(true)
    }
    const deActivate=()=>{
        
        setEditMode(false)  

        props.setNewStatus(status)
    }


    const setNewStatus=(e)=>{
        if(e===""){
            e="No Status"
            setStatus(e)
        }
        else{
        setStatus(e.currentTarget.value)
        }
    }


    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);
        return(
            <div>
                <div className={c.myStatus}>
                {!editMode&&<p onDoubleClick={activate}>{props.myStatus!=="."?<span>{props.myStatus}</span>:<span>{props.status}</span>}</p>}

                </div>
                <div onBlur={deActivate}>
                    {editMode&&<input onChange={ setNewStatus } placeholder="add new status" type="text" />}
                </div>
            </div>
        )
}
let mstp=(state)=>{
    return{
        status:state.profileReducer.status,
        myStatus:state.statusReducer.myStatus,       
    }
}
let mdtp=(dispatch)=>{
    return{
    setNewStatus:(status)=>dispatch(setStatusTC(status)),
}}


export default compose(connect(mstp,mdtp))(StatusWithHooksComponent);
