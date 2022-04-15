import {createSelector} from "reselect"

export const pageSizeSelector=(state)=>{
    return state.schoolmatesReducer.pageSize
}
export const currentPageSelector=(state)=>{
    return state.schoolmatesReducer.currentPage
}
export const totalCountSelector=(state)=>{
    return state.schoolmatesReducer.totalCount
}
export const followedSelector=(state)=>{
    return state.schoolmatesReducer.followed
}
export const disabledSelector=(state)=>{
    return state.schoolmatesReducer.disabled
}
export const usersSelector=(state)=>{
    return state.schoolmatesReducer.users;
}
export const usersSuperSelector=createSelector(usersSelector,disabledSelector,(users,disabled)=>{
    return users.filter(m=>true)
})