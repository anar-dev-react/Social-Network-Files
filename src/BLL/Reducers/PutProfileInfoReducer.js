import React from "react";
import {ProfileAPI} from "../../DAL/Api";

const CHAHGE_INFO = "CHAHGE_INFO";

let initialState = {
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
}

export const PutProfileInfoReducer = (state = initialState, action) => {
    switch(action.type){
        case CHAHGE_INFO:
            return {...state,...action.data};
        default:
            return state
    }
}

const changeInfoAC = (value) => {
    return {type: CHAHGE_INFO,value}
}

export const changeInfoTC=(data)=>
    async (dispatch)=>{
        let response=await ProfileAPI.putProfileInfoEP(data);
            if(response.data.resultCode===0){
               dispatch(changeInfoAC(data)) 
            }
    }