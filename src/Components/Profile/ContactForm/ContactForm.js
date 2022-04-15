import React from 'react'
import { Field, reduxForm } from 'redux-form'
import c from "./ContactForm.module.css"

export const ContactForm = (props) => {
  return (
    <div><ContactReduxForm onSubmit={props.onSubmit} initialValues={props.initialValues}/></div>
  )
}


let contactForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} initialValues={props.initialValues} className={c.contactForm}>
        <button type="submit" className={c.send__value}>Submit</button>
        <div>
          <label htmlFor="fullName">FullName</label>
          <Field name="fullName" component="input" type="text" className={c.job__input}/>
        </div>
        <div>
          <label htmlFor="lookingForAJob">Looking For a Job?</label>
          <Field name="lookingForAJob" component="input" type="checkbox" className={c.job__search} />
        </div>
        <div>
          <label htmlFor="lookingForAJobDescription">Professional Skills</label>
          <Field name="lookingForAJobDescription" component="input" type="text" className={c.job__input}/>
        </div>
        <div>
          <label htmlFor="About Me">About Me</label>
          <Field name="aboutMe" component="input" type="text" className={c.job__input}/>
        </div>
        <div>
        </div>
      </form>
    )
  }

  const ContactReduxForm = reduxForm({
    form: 'contact'
  })(contactForm)