import React from "react";
import {Field, getFormValues, reduxForm} from "redux-form";
import Validate from "../../form/FormValidations";

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) =>
    <div className={touched && error ? "form-group has-error" : "form-group"}>
        <label className="col-sm-2 control-label ">{label}</label>
        <div className="col-sm-10">
            {type == "textarea"
                ? <textarea {...input} placeholder={label} className="form-control">
            {/*data*/}
          </textarea>
                : <Field component="input"
                         {...input}
                         placeholder={label}
                         type={type}
                         className="form-control"
                />}
            {touched &&
            ((error && <span className="help-block">{error}</span>) ||
            (warning && <span className="help-block">{warning}</span>))}
        </div>
    </div>;

const AdminForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form className="form-horizontal adminForm" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field
                    name="name"
                    type="text"
                    component={renderField}
                    label="Name"
                    validate={[Validate.required, Validate.minLength(4)]}
                />
                <Field
                    name="email"
                    type="text"
                    component={renderField}
                    label="Email"
                    validate={[Validate.required, Validate.email()]}
                />
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                    validate={[Validate.required, Validate.minLength(4)]}
                />
                <Field
                    name="confirmPassword"
                    type="password"
                    component={renderField}
                    label="Confirm Password"
                    validate={[Validate.required]}
                />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label>
                                <Field component="input" type="checkbox" className="minimal" name="isSuperAdmin"
                                       id="role"
                                       value="1"/> Super Admin
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group" style={{display: props.isSuperAdmin ? 'none' : ''}}>
                    <label className="col-sm-2 control-label" style={{"padding-top":"0px"}}>Admins Role</label>
                    <div className=" col-sm-8">
                        <label>
                            <Field component="input" type="radio" name="admins" value="view"/>
                            View Only
                        </label>
                        <label>
                            <Field component="input" type="radio" name="admins" value="manage"/>
                            Manage admins
                        </label>
                    </div>
                </div>
                <div className="form-group" style={{display: props.isSuperAdmin ? 'none' : ''}}>
                    <label className="col-sm-2 control-label" style={{"padding-top":"0px"}}>Products Role</label>
                    <div className=" col-sm-8">
                        <label>
                            <Field component="input" type="radio" name="products"
                                   value="view"
                            />
                            View Only
                        </label>
                        <label>
                            <Field component="input" type="radio" name="products"
                                   value="manage"
                            />
                            Manage products
                        </label>
                    </div>
                </div>
                <div className="form-group" style={{display: props.isSuperAdmin ? 'none' : ''}}>
                    <label className="col-sm-2 control-label" style={{"padding-top":"0px"}}>Orders Role</label>
                    <div className="col-sm-8">
                        <label>
                            <Field component="input" type="radio" name="orders"
                                   value="view"/>
                            View
                        </label>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="button" className="btn btn-default">Cancel
                    </button>
                    <button type="submit" className="btn btn-info pull-right">
                        Save
                    </button>
                </div>
            </div>

        </form >
    );
};

export default reduxForm({
    form: "AdminForm", // a unique identifier for this form
    enableReinitialize: true
})(AdminForm);
