import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getProfileSelector } from '../ProfileSelector'
import { ContactForm } from './ContactForm'



class ContactFormComponent extends React.Component{
 
    render(){
        return <ContactForm {...this.props}/>
    }
}


const mstp=(state)=>{
    return{
        initialValues:getProfileSelector(state)
    }
}

const mdtp=(dispatch)=>{
    return{
    }
}

export default compose(connect(mstp,mdtp))(ContactFormComponent);