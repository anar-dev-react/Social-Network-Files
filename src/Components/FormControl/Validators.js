
export const required=(value)=>{
    if(value) return undefined
    return "Field is required"
}
export const maxLength=(length)=>(value)=>{
    if(value.length>length) return`Max length has to be ${length}`;
     return undefined;
}
export const minLength=(length)=>(value)=>{
    if(value.lengt<length) return `Min length has to be ${length}`;
    return undefined;
}

