export const idSelector=(state)=>{
    return state.authReducer.id;
}
export const emailSelector=(state)=>{
    return state.authReducer.email;
}
export const loginSelector=(state)=>{
    return state.authReducer.login
}
export const isAuthSelector=(state)=>{
    return state.authReducer.isAuth
}

export const captchaSelector=(state)=>{
    return state.authReducer.captcha
}