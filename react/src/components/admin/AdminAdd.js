import React from "react";
import AdminForm from "./AdminForm";

export default props =>
    <div className="row">

        <div className="col-md-6">
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">Admin</h3>
                </div>
                <AdminForm
                    onSubmit={props.onSubmit}
                    isSuperAdmin={props.isSuperAdmin}
                    initialValues={props.initialValues}
                />
            </div>
        </div>

    </div>;
