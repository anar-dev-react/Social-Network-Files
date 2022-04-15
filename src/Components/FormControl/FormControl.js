import React from "react";
import c from "./FormControl.module.css"
export const LoginFormControl=(Element)=>({input,meta,...props})=>{
    return(
        <div className={c.formControl}>
            <div className={ meta.visited&&meta.error?c.error:c.input}>
            <Element  {...input} {...props}/>
            </div>
            {meta.visited&&meta.error&& <span className={c.error__answer}>{meta.error}</span>}
        </div>
    )
}