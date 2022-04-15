import * as axios from "axios"

const instance=axios.create(
    {
        baseURL:"https://social-network.samuraijs.com/api/1.0/",
        withCredentials:true,
        headers:{"API-KEY":"3c5cb9c1-db19-493d-96ef-cb8adc939f4e"},
      
    }
)

export const UsersAPI={
    usersEP(pageSize,currentPage){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    setCurrentPageEP(pageSize,currentPage){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    followEP(id){
        return instance.post(`follow/${id}`)
    },
    unFollowEP(id){
        return instance.delete(`follow/${id}`)
    }
}


export const AuthAPI={
    authMeEP(){
        return instance.get("auth/me")
    },
    loginEP(email,password,rememberMe=false,captcha=null){
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    logoutEP(){
        return instance.delete(`auth/login`)
    },
    captchaEP(){
        return instance.get(`security/get-captcha-url`)
    }
}



export const ProfileAPI={
    myStatusEP(status){
        return instance.put(`profile/status`,{status:status})
    },
    getProfileEP(userId){
        return instance.get(`profile/${userId}`)
    },
    getProfileStatusEP(userId){
      return instance.get(`profile/status/${userId}`)
    },
    savePhotoEP(photoFile){
        const formData=new FormData();
        formData.append("image",photoFile);

        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    contactFormEP(data){
        return instance.put(`profile`,data)
    }
}
