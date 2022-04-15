import React from "react";
import { ProfileAPI } from "../../DAL/Api";

const SET_STATUS="SET_STATUS";

let initialState={
myStatus:".",
}

const StatusReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_STATUS:
            return{...state,myStatus:action.value}
    
    default:
        return state;
    }
}
export default StatusReducer;

const setStatusAC=(value)=>{
    return{type:SET_STATUS,value}
}

export const setStatusTC=(status)=>
    async (dispatch)=>{
    let response =await ProfileAPI.myStatusEP(status)
        if(response.data.resultCode===0){
        dispatch(setStatusAC(status))
    }
}
