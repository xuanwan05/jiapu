import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!values.lastName) {

  }
}

const renderField = ({ input, label, meta: {touched, error, warning }}) => {
  <>
    <div className={error && touched ? 'error rouwInput' : 'rowInput'}>
      <label>{label}</label>
      <div className='inputContainer'>
        <input {...input} tupe='string' />
        {touched && 
          ((error && <span>{error}</span>) || 
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  </>
}

function submit(values, dispatch) {
  return dispatch(fetchAgents(values));
}

let AgentForm = ({ handleSubmit, submitting }) => 
  <form onSubmit={handleSubmit(submit)}>
    <header>
      <p>Agent Information</p>
      <Field name='firstName' label='First Name' component={renderField}/>
      <Field name='middleName' label='Middle Name' component={renderField}/>
      <Field name='lastName' label='Last Name' component={renderField}/>
      <Field name='phone' label='Phone' component={renderField}/>
      <Field name='email' label='Email' component={renderField}/>
      <Field name='fax' label='Fax' component={renderField}/>
    </header>
  </form>

AgentForm = reduxForm({
  form: 'agentForm',
  validate
})(AgentForm)

export default AgentForm

// Agent.prototype = {
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   middleName: PropTypes.string,
//   phone: PropTypes.string,
//   email: PropTypes.string,
//   fax: PropTypes.string,
// }