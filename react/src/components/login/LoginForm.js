import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {
    required,
    maxLength,
    number,
    minValue,
    email,
    maxValue,
    tooOld,
    aol
} from '../../form/FormValidations'

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="form-group has-feedback">
        <input {...input} placeholder={label} type={type} className="form-control"/>
    </div>
)

const FieldLevelValidationForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="text"
                   component={renderField} label="Email"
            />
            <Field name="password" type="password"
                   component={renderField} label="Password"
            />

            <div className="row">
                <div className="col-xs-8">
                </div>
                <div className="col-xs-4">
                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)