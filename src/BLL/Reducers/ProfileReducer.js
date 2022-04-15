import React from "react";
import { ProfileAPI, UsersAPI } from "../../DAL/Api";

const GET_PROFILE="GET_PROFILE";
const GET_PROFILE_STATUS="GET_PROFILE_STATUS";
const SAVE_PHOTO="SAVE_PHOTO";
const SHOW_TEXT="SHOW_TEXT";
const ADD_POST_TO_PAGE="ADD_POST_TO_PAGE";
let initialState={
    getProfile:null,
    isFetching:false,
    status:"status",
    myId:null,
    userId:null,
    posts:[
        {name:"User 1",post:" It's a hard coded post",like:12},
        {name:"User 2",post:" Server  doesn't allow us to use it",like:16},
        {name:"User 3",post:" However we will try to fix it too",like:22},
        {name:"User 4",post:" Wish you good day",like:32},
    ],

}
const ProfileReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PROFILE:
            return{...state,getProfile:action.value}
        case GET_PROFILE_STATUS:
            return{...state,status:action.value}
        case SAVE_PHOTO:
            return {...state, ...state.photos,photos:action.value}

        case ADD_POST_TO_PAGE:
                return{...state,posts:[...state.posts,action.value]}

        default:
            return state
    }
}
export default ProfileReducer;




const getProfileAC=(value)=>{
    return {type:GET_PROFILE,value:value}
}
const getProfileStatusAC=(value)=>{
    return{type:GET_PROFILE_STATUS,value:value?value:"No Status"}
}
const savePhotoAC=(value)=>{
    return {type:SAVE_PHOTO,value}
}
export const showTextAC=(value)=>{
    return{ type:SHOW_TEXT,value}
}
export const addPostToPageAC=(value)=>{
    return{type:ADD_POST_TO_PAGE,value}
}



export const getProfileTC=(userId)=>
    async (dispatch)=>{
        let response =await ProfileAPI.getProfileEP(userId)
            dispatch(getProfileAC(response.data))
    }
export const getProfileStatusTC=(userId)=>
    async(dispatch)=>{
        let response=await ProfileAPI.getProfileStatusEP(userId);
            dispatch(getProfileStatusAC(response.data))
    }
export const savePhotoTC=(file)=>
     async(dispatch)=>{
         let response = await ProfileAPI.savePhotoEP(file);
         if(response.data.resultCode===0){
             dispatch(savePhotoAC(response.data.data.photos))
         }
     }
export const contactFormTC=(data)=>
         async(dispatch,getState)=>{
            let response= await ProfileAPI.contactFormEP(data)
            let userId=getState().authReducer.id
            
            if(response.data.resultCode===0){
             dispatch(getProfileTC(userId))
            }
        }
     