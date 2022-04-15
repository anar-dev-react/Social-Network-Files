export const getProfileSelector=(state)=>{
    return state.profileReducer.getProfile
}
export const isFetchingSelector=(state)=>{
    return state.profileReducer.isFetching
}
export const statusSelector=(state)=>{
    return state.profileReducer.status
}
export const myStatusSelector=(state)=>{
    return state.statusReducer.myStatus
}
export const photosSelector=(state)=>{
    return state.profileReducer.photos
}
export const postsSelector=(state)=>{
    return state.profileReducer.posts
}





