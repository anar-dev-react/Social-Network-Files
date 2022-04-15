import React from "react";

const ADD_MESSAGE="ADD_MESSAGE";

let initialState={
    dialogs:[
    {name:"Josef Pavlicek",
    id:1,
    img:null,
    messages: [
        {me:"Hello sir. How are you",id:1},
        {guest:"Thanks a lot, how about you",id:2}
        ]},

    {name:"Martin Kozak",
    id:2,
    img:null,
    messages:[
        {me:"Hello sir.May I ask you a question?",id:1},
        {guest:"Hello. Absolutely yes",id:2}
    ]},

    {name:"Batikan Falay",
    id:3,
    img:null,
    messages:[
    {guest:"Hello bro. How are you",id:2},
    {me:"Thanks a lot, how about you",id:1},
    {guest:"Are you ready for the exam?",id:4},
    {me:"I'm ready.",id:3},
    ]},
    
    ]
}



const DialogsReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_MESSAGE:
            return {...state,dialogs:state.dialogs.map(m=>{
                if(m.id===action.id){
                 return{...m,messages:[...m.messages,action.value]}
                }
                else return m;
            })}
            default:
                return state
    }
}

export const addMessageAC=(me,messageId,id)=>{
return {type:ADD_MESSAGE,value:{me,messageId},id}
}

export default DialogsReducer