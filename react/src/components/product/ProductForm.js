import React from "react";
import {Field, reduxForm} from "redux-form";
import Validate from "../../form/FormValidations";

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) =>
    <div className={touched && error ? "form-group has-error" : "form-group"}>
        <label className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-10">
            {type == "textarea"
                ? <textarea {...input} placeholder={label} className="form-control">
            {/*data*/}
          </textarea>
                : <input
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

const FieldLevelValidationForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field
                    name="title"
                    type="text"
                    component={renderField}
                    label="Title"
                    validate={[Validate.required, Validate.minLength(4)]}
                />
                <Field
                    name="description"
                    type="textarea"
                    component={renderField}
                    label="Description"
                    validate={[Validate.required, Validate.minLength(4)]}
                />
                <Field
                    name="price"
                    type="text"
                    component={renderField}
                    label="Price"
                    validate={[Validate.required, Validate.number]}
                />
                <div
                    className={
                        props.productImageTouched && !props.productImage
                            ? "form-group has-error"
                            : "form-group"
                    }
                >
                    <label className="col-sm-2 control-label">Image</label>
                    <div className="col-sm-10">
                        <input
                            className="file"
                            id="inputProductImage"
                            type="file"
                            data-show-upload="false"
                            data-show-remove="false"
                            data-show-preview="false"
                            data-max-file-size="2048k"
                            data-allowed-file-extensions="[&quot;jpg&quot;,&quot;jpeg&quot;, &quot;png&quot;]"
                            onChange={props.fileUpload}
                            onClick={props.fileUpload}
                        />
                        <span
                            className="help-block"
                            style={{
                                display: props.productImageTouched && !props.productImage
                                    ? ""
                                    : "none"
                            }}
                        >
              Please add valid image with max size 2M required
            </span>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="button" className="btn btn-default">
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-info pull-right">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "fieldLevelValidation", // a unique identifier for this form
    enableReinitialize: true
})(FieldLevelValidationForm);
