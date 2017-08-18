import React from "react";
import {connect} from "react-redux";
import {updateTitle as updatePageTitle} from "redux-title";
import AdminAdd from "../components/admin/AdminAdd";
import {Field, change, formValueSelector,reduxForm} from "redux-form";

class AdminFormContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(updatePageTitle("Add Admin"));
        $('.adminForm').find('input[type=radio]').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        }).on('ifChecked', (event) => {
            this.props.dispatch(change('AdminForm',$(event.target).attr('name'),$(event.target).prop('checked')));
            // this.adminForm.controls.roles['controls'][$(event.target).attr('name')].patchValue($(event.target).val());
        });
        $('.adminForm').find('input[type=checkbox]').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        }).on('ifChanged', (event) => {
            this.props.dispatch(change('AdminForm','isSuperAdmin',$(event.target).prop('checked')));
        })
    }

    onSubmit(values) {
        if (this.props.productImage) {
            this.props.dispatch(Bootstrap.showLoader());
            if (this.props.isOldProduct) {

                this.props.dispatch(
                    updateProduct(this.props.initialValues._id, values)
                );
            } else {
                this.props.dispatch(addProduct(values, this.props.productImage));
            }
        } else {
            this.props.dispatch(touchProductImage());
        }
    }

    render() {

        return (
            <div>
                <AdminAdd
                onSubmit={this.onSubmit.bind(this)}
                initialValues={this.props.initialValues}
                isSuperAdmin={this.props.isSuperAdmin}
            />
            </div>
        );
    }
}
const selector = formValueSelector('AdminForm')
const mapStateToProps = state => {
    const value = selector(state, 'isSuperAdmin')
    return {
        initialValues: state.admin.data,
        isSuperAdmin: value
    };
};
export default connect(mapStateToProps)(AdminFormContainer);
