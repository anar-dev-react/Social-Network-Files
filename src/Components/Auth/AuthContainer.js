import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { authMeTC, logoutTC, reloadAC } from "../../BLL/Reducers/AuthReducer";
import { Auth } from "./Auth";
import { emailSelector, idSelector, isAuthSelector, loginSelector } from "./AuthSelector";

class AuthComponent extends React.Component{
    componentDidMount(){
        this.props.authMe();
    }

    render(){
        return < Auth {...this.props} />
    }
}


let mstp=(state)=>{
    return{
    id:idSelector(state),
    email:emailSelector(state),
    login:loginSelector(state),
    isAuth:isAuthSelector(state),
    }
}

let mdtp=(dispatch)=>{
    return{
    authMe:()=>dispatch(authMeTC()),
    logout:()=>dispatch(logoutTC()),
    reloadFunc:(value)=>dispatch(reloadAC(value))
    }
}

export default compose(connect(mstp,mdtp))(AuthComponent)