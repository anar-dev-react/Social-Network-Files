import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setStatusTC } from "../../../BLL/Reducers/StatusReducer";
import { myStatusSelector } from "../ProfileSelector";
import c from "./Status.module.css"

class StatusComponent extends React.Component{

     state={
        status:"",
        editMode:false
    }
    activate=()=>{
        this.setState({
            editMode:true
        })
    }
    deActivate=()=>{
        this.setState({
            editMode:false
        })
        this.props.setStatus(this.state.status)
    }
    setNewStatus=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.myStatus!==this.props.myStatus){
            this.setState({
                status:this.props.myStatus
            })
        }        
    }

    render(){
        return(
            <div>
                <div className={c.myStatus}>
                {!this.state.editMode&&<p onDoubleClick={this.activate}>{this.props.myStatus}</p>}
                </div>
                <div onBlur={this.deActivate}>
                    {this.state.editMode&&<input onChange={this.setNewStatus} placeholder="add new status" type="text" />}
                </div>
            </div>
        )
    }
}

let mstp=(state)=>{
    return{
        myStatus:myStatusSelector(state)
    }
}
let mdtp=(dispatch)=>{
    return{
    setStatus:(status)=>dispatch(setStatusTC(status))
}}

export default compose(connect(mstp,mdtp))(StatusComponent);
