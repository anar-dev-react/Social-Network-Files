import React from "react";
import {stopSubmit} from "redux-form";
import {AuthAPI} from "../../DAL/Api";
import c from "./../../Components/Login/Login.module.css"

const AUTH_ME = "AUTH_ME";
const RELOAD = "RELOAD";
const CAPTCHA = "CAPTCHA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}


export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state, ...action.value
            };
        case RELOAD:
            return {
                ...state, isAuth: action.value
            };
        case CAPTCHA:
            return {
                ...state, captcha: action.value
            };
        default:
            return state;
    }
}



const authMeAC = (email, id, login, isAuth) => {
    return {
        type: AUTH_ME,
        value: {email, id, login, isAuth}
    }
}
export const reloadAC = (value) => {
    return {
        type: RELOAD, value}
}
export const captchaAC = (value) => {
    return {
        type: CAPTCHA, value}
}



export const authMeTC=()=>
    async (dispatch)=>{
        let response =await AuthAPI.authMeEP()
                if(response.data.resultCode===0){
                    let{email,id,login}=response.data.data
                    dispatch(authMeAC(email,id,login,true))
                }
    }
export const captchaTC = () =>
    async (dispatch) => {
        let response = await AuthAPI.captchaEP()
        dispatch(captchaAC(response.data.url));
    }
export const loginTC=(email,password,rememberMe,captcha)=>
        async (dispatch)=>{
            let response =await AuthAPI.loginEP(email,password,rememberMe,captcha)
                if(response.data.resultCode===0){
                    dispatch(authMeTC(email,password,rememberMe,captcha))
                }
                else if(response.data.resultCode===1){
                    let stopSubmitMessage=stopSubmit("login",{_error:<span className={c.wrong__enterance}>Wrong Email or Password</span>})
                    dispatch(stopSubmitMessage);
                }
                else if(response.data.resultCode===10){
                    dispatch(captchaTC())
                }
        }
export const logoutTC=()=>
        async(dispatch)=>{
            let response =await AuthAPI.logoutEP()
                if(response.data.resultCode===0){
                    dispatch(authMeTC(null,null,null,false))
                    dispatch(captchaAC(null))
                }
        }
    