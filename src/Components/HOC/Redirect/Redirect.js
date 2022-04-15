import { Redirect } from "react-router-dom"
import React from "react"
import { connect } from "react-redux"

let mstp =(state)=> ({
    isAuth:state.authReducer.isAuth
})

export const RedirectHOC = (Component)=>{
    class RedirectComponent extends React.Component{
        render(){
             if(!this.props.isAuth){return <Redirect to="/Login"/>}
             return <Component {...this.props}/>
        }
    }
const RedirectContainer = connect(mstp)(RedirectComponent)
 return RedirectContainer;
}

