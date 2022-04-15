import React from 'react'
import { Field, reduxForm } from 'redux-form'
import c from "./PutProfile.module.css"

export const PutProfileInfo = (props) => {


  const onSubmit = (data) => {
    let userId = props.myId
    data.userId = userId
    props.changeInfo(data)
  }

  return (
    <div>
      <InfoReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const InfoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Looking For A Job:
        <Field placeholder={"d"} className={c.text} type='text' name={"lookingForAJob"} /*validate={[maxLength50]}*/ component={"input"} />
      </label>
      <label>
        Looking For A Job Description:
        <Field placeholder={"d"} className={c.text} type='text' name={"lookingForAJobDescription"} /*validate={[maxLength50]}*/ component={"input"} />
      </label>
      <label>
        FullName:
        <Field placeholder={"d"} className={c.text} type='text' name={"fullName"} /*validate={[maxLength50]}*/ component={"input"} />
      </label>
      <label>
        Facebook:
        <Field placeholder={"d"} className={c.text} type='text' name={"facebook"} /*validate={[maxLength50]}*/ component={"input"} />
      </label>
      <button>add</button>
    </form>
  )
}

const InfoReduxForm = reduxForm({
  form: 'information'
})(InfoForm)

