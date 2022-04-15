import React from 'react';
import c from "./Login.module.css"
import one from "./../../assets/uisimg_17069.png"
import two from "./../../assets/uisimg_17523.png"
import three from "./../../assets/uisimg_2793.png"
import four from "./../../assets/uisimg_2795.png"
import five from "./../../assets/uisimg_2797.png"
import six from "./../../assets/uisimg_2798.png"
import seven from "./../../assets/uisimg_2799.png"
import { Field, reduxForm } from "redux-form"
import { required, maxLength, minLength } from '../FormControl/Validators';
import { LoginFormControl } from '../FormControl/FormControl';
import { Redirect } from 'react-router-dom';

export const Login = (props) => {
  const onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe, data.captcha);
  }

  return (<div>
    {props.isAuth ? <Redirect to="/Profile" /> :
      <div>
        <div className={c.logos}>
          <img src={one} className={c.one} />
          <img src={two} className={c.two} />
          <img src={three} className={c.three} />
          <img src={four} className={c.four} />
          <img src={five} className={c.five} />
          <img src={six} className={c.six} />
          <img src={seven} className={c.seven} />
        </div>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
      </div>}
  </div>)
};



const maxLength30 = maxLength(30);
const minLength10 = minLength(10)
const Input = LoginFormControl('input')



const LoginForm = (props) => {
  return (
    <form className={c.login__form} onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="login">Login</label>
        <Field placeholder={"Add mail or phone"} className={c.text} type='text' name={"email"} validate={[required, maxLength30, minLength10]} component={Input} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field placeholder={"Add password"} className={c.password} name={"password"} validate={[required, maxLength30, minLength10]} component={Input} type='password' />
      </div>
      <div className={c.check}>
        <label htmlFor="checkBox">RememberMe</label>
        <Field type={"checkbox"} className={c.checkbox} name={"rememberMe"} component={'input'} />
      </div>
      <div>{props.error && <span>{props.error}</span>}</div>
      <div>
        <button className={c.login}>Login</button>
      </div>
      <div className={c.captcha__container}>
        {props.captcha && <div className={c.captcha}><img src={props.captcha} /></div>}
        {props.captcha && <p><Field placeholder={"Add Captcha"} name={"captcha"} component={Input} type='text' /></p>}
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)