import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { captchaAC, captchaTC, loginTC } from "../../BLL/Reducers/AuthReducer";
import { captchaSelector, isAuthSelector } from "../Auth/AuthSelector";
import { Login } from "./Login";

class LoginComponent extends React.Component{


    render(){
        return <Login {...this.props}/>
    }
}

let mstp =(state)=>{
    return{
        isAuth:isAuthSelector(state),
        captcha:captchaSelector(state)
    }
    
}
let mdtp=(dispatch)=>{
    return{
        login:(email,password,rememberMe,captcha)=>dispatch(loginTC(email,password,rememberMe,captcha)),
        clearCaptcha:(value)=>dispatch(captchaAC(value))
}}

export default compose(connect(mstp,mdtp))(LoginComponent)