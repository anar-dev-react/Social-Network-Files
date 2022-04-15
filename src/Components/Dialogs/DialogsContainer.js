import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { addMessageAC} from "../../BLL/Reducers/DialogsReducer"
import { Dialogs } from "./Dialogs"
import { RedirectHOC } from "../HOC/Redirect/Redirect";
import { dialogsSelector } from "./DialogsSelector"



class DialogsComponent extends  React.Component{

    render(){
        return <Dialogs {...this.props}/>
    }
}



let mstp=(state)=>{
    return {
        dialogs:dialogsSelector(state)
    }
}
let mdtp=(dispatch)=>{
    return{
        addMessage:(value,messageId,id)=>dispatch(addMessageAC(value,messageId,id)),
    }
}
export default compose(connect(mstp,mdtp),RedirectHOC)(DialogsComponent)