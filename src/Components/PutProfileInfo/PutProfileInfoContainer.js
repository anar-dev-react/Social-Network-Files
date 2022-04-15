import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { changeInfoTC } from "../../BLL/Reducers/PutProfileInfoReducer";
import { idSelector } from "../Auth/AuthSelector";
import { PutProfileInfo } from "./PutProfileInfo";
import { facebookSelector, lookingForAJobSelector } from "./putProfileInfoSelector";

 class PutProfileInfoComponent extends React.Component  {
    componentDidMount(){ 
     let userId=this.props.match.params.userId
     if(!userId){                                                                                           
         userId=this.props.myId
        }
    }
           render(){
               return  <PutProfileInfo {...this.props} myId={this.props.myId}/>
           }       
}

let mstp=(state)=>{
    return{
        lookingForAJob:lookingForAJobSelector(state),
        facebook:facebookSelector(state),
        myId:idSelector(state)
    }
}

let mdtp=(dispatch)=>{
    return{
        changeInfo:(data)=>dispatch(changeInfoTC(data))
    }
}


export default compose(connect(mstp,mdtp),withRouter)(PutProfileInfoComponent)