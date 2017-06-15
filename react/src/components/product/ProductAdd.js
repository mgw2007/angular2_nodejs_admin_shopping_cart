import React from "react";
import { connect } from "react-redux";
import ProductForm from "./ProductForm";

export default props =>
  <div className="row">

    <div className="col-md-6">
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Product</h3>
        </div>
        <ProductForm
          onSubmit={props.onSubmit}
          path="form"
          fileUpload={props.fileUpload}
          productImage={props.productImage}
          productImageTouched={props.productImageTouched}
          initialValues={props.initialValues}
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Product Image</h3>
        </div>
        <div className="box-body">
          <div className="col-md-11">
            <div className="thumbnail">
              <img src={props.uploadImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
