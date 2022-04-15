import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import {addPostToPageAC, contactFormTC, getFriendsAC, getFriendsTC, getProfileStatusTC, getProfileTC,getUsersTC,savePhotoTC, setFriendsAC, showTextAC } from "../../BLL/Reducers/ProfileReducer";
import { idSelector, isAuthSelector } from "../Auth/AuthSelector";
import { RedirectHOC } from "../HOC/Redirect/Redirect";
import {usersSuperSelector } from "../SchoolMates/SchoolMatesSelectors";
import { Profile } from "./Profile";
import { getProfileSelector, isFetchingSelector, myStatusSelector, photosSelector, postsSelector, statusSelector } from "./ProfileSelector";

class ProfileComponent extends React.Component{

    componentDidMount(){
      
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=this.props.myId;
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId!== prevProps.match.params.userId ||prevProps.photos!==this.props.photos){
            this.props.getProfile(this.props.myId)
            this.props.getProfileStatus(this.props.myId)
        }
    }
    render(){
        return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
}


}

let mstp=(state)=>{
    
    return{
        getProfileInfo:getProfileSelector(state),
        isFetching:isFetchingSelector(state),
        status:statusSelector(state),
        myStatus:myStatusSelector(state),
        isAuth:isAuthSelector(state),
        myId:idSelector(state),
        photos:photosSelector(state),
        posts:postsSelector(state),
        users:usersSuperSelector(state),
    }
}
let mdtp=(dispatch)=>{
    return{
        getProfile:(userId)=>dispatch(getProfileTC(userId)),
        getProfileStatus:(userId)=>dispatch(getProfileStatusTC(userId)),
        savePhoto:(file)=>dispatch(savePhotoTC(file)),
        showTextFunction:(value)=>dispatch(showTextAC(value)),
        contact:(data)=>dispatch(contactFormTC(data)),
        addPostToPage:(post)=>dispatch(addPostToPageAC(post))

    }
}


export default compose(connect(mstp,mdtp),RedirectHOC,withRouter)(ProfileComponent)