import { UsersAPI } from "../../DAL/Api"

const SET_USERS="SET_USERS";
const SET_TOTAL_COUNT="SET_TOTAL_COUNT";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const DISABLED="DISABLED";
const FOLLOW="FOLLOW";
const UNFOLLOW="UNFOLLOW";

let initialState={
    users:[],
    pageCount:null,
    pageSize:20,
    currentPage:1,
    totalCount:null,
    followed:false,
    disabled:[],
}

export const SchoolmatesReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USERS:
            return {...state,users:action.value};
        case SET_TOTAL_COUNT:
                return {...state,totalCount:action.value}
                case SET_CURRENT_PAGE:
                    return {...state,currentPage:action.value}
        case DISABLED:
            return {...state,disabled:(action.value
                   ?[...state.disabled,action.id]
                   :state.disabled.filter(id=>id!==action.id)
                )}
        case FOLLOW:
            {let stateCopy={...state,users:state.users.map(m=>{
                if(m.id===action.value){
                    return{...m,followed:true}
                }
                return m;
            })}
                return stateCopy;}
        case UNFOLLOW:
             {let stateCopy={...state,users:state.users.map(m=>{
                if(m.id===action.value){
                    return{...m,followed:false}
                }
            return m;
            })}
                return stateCopy;}
        default:
                return state
    }
}

const setUsersAC=(users)=>{
    return {type:SET_USERS,value:users}
}
const setTotalCount=(totalCount)=>{
    return{type:SET_TOTAL_COUNT,value:totalCount}
}
export const setCurrentPageAC=(users)=>{
    return{type:SET_CURRENT_PAGE,value:users}
}
export const followAC=(userId)=>{
    return{type:FOLLOW,value:userId}
}
export const unFollowAC=(userId)=>{
    return{type:UNFOLLOW,value:userId}
}
export const disabledToggleAC=(toggle,id)=>{
    return{type:DISABLED,value:toggle,id}
}




export const setUsersTC=(pageSize,currentPage)=>
    async (dispatch)=>{
        let response=await UsersAPI.usersEP(pageSize,currentPage)
            dispatch(setUsersAC(response.data.items))
            dispatch(setTotalCount(response.data.totalCount))
    }
export const setCurrentPageTC=(pageSize,currentPage)=>
    async (dispatch)=>{       
        let response=await UsersAPI.setCurrentPageEP(pageSize,currentPage)
        dispatch(setCurrentPageAC(currentPage))
            dispatch(setUsersAC(response.data.items))
    }
export const followTC=(userId)=>
    async (dispatch)=>{
        let response =await UsersAPI.followEP(userId)
            if(response.data.resultCode===0){
            dispatch(followAC(userId))
            }
        }
export const unFollowTC=(userId)=>
    async(dispatch)=>{
        let response =await UsersAPI.unFollowEP(userId)
            if(response.data.resultCode===0){
                dispatch(unFollowAC(userId))
            }
    }

