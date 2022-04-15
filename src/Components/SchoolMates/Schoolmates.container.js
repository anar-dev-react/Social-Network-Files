import React from "react";
import { connect } from "react-redux";
import { disabledToggleAC,followTC, setCurrentPageTC, setUsersTC,unFollowTC } from "../../BLL/Reducers/SchoolmatesReducer";
import { Schoolmates } from "./Schoolmates";
import { currentPageSelector, disabledSelector, followedSelector, pageSizeSelector, totalCountSelector, usersSuperSelector } from "./SchoolMatesSelectors";
import { RedirectHOC } from "../HOC/Redirect/Redirect";
import { compose } from "redux";

class SchoolmatesComponent extends React.Component{
    componentDidMount(){
        this.props.setUsers(this.props.pageSize,this.props.currentPage);
    }

    setCurrentPage=(currentPage)=>{  
        this.props.setCurrentPage(this.props.pageSize,currentPage);
    }
    
    render(){
        return <Schoolmates  {...this.props} setCurrentPage={this.setCurrentPage}/>
    }
}

let mstp=(state)=>{
    return{
        users:usersSuperSelector(state),
        pageSize:pageSizeSelector(state),
        currentPage:currentPageSelector(state),
        totalCount:totalCountSelector(state),
        followed:followedSelector(state),
        disabled:disabledSelector(state),
    }
}
let mdtp=(dispatch)=>{
    return{
    setUsers:(pageSize,currentPage)=>dispatch(setUsersTC(pageSize,currentPage)),
    follow:(userId)=>dispatch(followTC(userId)),
    unFollow:(userId)=>dispatch(unFollowTC(userId)),
    setCurrentPage:(pageSize,currentPage)=>dispatch(setCurrentPageTC(pageSize,currentPage)),
    disabledToggle:(toggle,id)=>dispatch(disabledToggleAC(toggle,id)),
    }
}

export default compose(connect(mstp,mdtp),RedirectHOC)(SchoolmatesComponent)