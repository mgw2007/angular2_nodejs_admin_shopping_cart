import React, { render } from "react";
import { connect } from "react-redux";
import middleware, { when, once } from "redux-when";
import { replace } from "react-router-redux";
import { updateTitle as updatePageTitle } from "redux-title";
import ProductAdd from "../components/product/ProductAdd";
import API from "../actions/apiRequests";
import { addFlashMessage } from "../actions/flashMessageActions";
import { showLoader, hideLoader } from "../actions/loaderActions";
import {
  addProductInitialState,
  touchProductImage,
  uploadProductImage,
  addProduct,
  getProductDataForUpdate,
  updateProduct
} from "../actions/productActions";

class ProductFormContainer extends React.Component {
  oldUrl = false;
  constructor(props) {
    super(props);
  }
  loadProductStates(props) {
    props.dispatch(addProductInitialState());
    // check if its update exist product or add new product
    if (props.params && props.params.id) {
      this.props.dispatch(updatePageTitle("Edit Product"));

      // dispatch old project data
      props.dispatch(getProductDataForUpdate(props.params.id));
    } else {
      this.props.dispatch(updatePageTitle("Add Product"));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.oldUrl &&
      this.props.router.getCurrentLocation().pathname != this.oldUrl
    ) {
      this.oldUrl = this.props.router.getCurrentLocation().pathname;
      this.loadProductStates(nextProps);
    } else {
      this.oldUrl = this.props.router.getCurrentLocation().pathname;
    }
  }
  componentDidMount() {
    this.loadProductStates(this.props);
    // apply jqury file input
    $("#inputProductImage").fileinput();
    // after submit and save
    this.props.dispatch(
      when(
        () => this.props.productSaved,
        () => {
          let isOldProduct = this.props.isOldProduct;
          this.loadProductStates(this.props);
          this.props.dispatch(hideLoader());
          if (isOldProduct) {
            this.props.dispatch(
              addFlashMessage({
                message: "Product updated successfully",
                type: "success"
              })
            );
          } else {
            this.props.dispatch(
              addFlashMessage({
                message: "Product added successfully",
                type: "success"
              })
            );
            this.props.router.replace("/products");
          }
        }
      )
    );
  }
  fileUpload(event) {
    let file = event.target.files[0];
    if (file) {
      this.props.dispatch(touchProductImage());
      if (["image/jpg", "image/jpeg", "image/png"].indexOf(file.type) != -1) {
        this.props.dispatch(uploadProductImage(file));
      }
    }
  }
  onSubmit(values) {
    if (this.props.productImage) {
      this.props.dispatch(showLoader());
      if (this.props.isOldProduct) {
        if (this.props.productImage != this.props.initialValues.imagePath) {
          this.props.dispatch(
            updateProduct(
              this.props.initialValues._id,
              values,
              this.props.productImage
            )
          );
        } else {
          this.props.dispatch(
            updateProduct(this.props.initialValues._id, values)
          );
        }
      } else {
        this.props.dispatch(addProduct(values, this.props.productImage));
      }
    } else {
      this.props.dispatch(touchProductImage());
    }
  }
  render() {
    return (
      <ProductAdd
        onSubmit={this.onSubmit.bind(this)}
        productImage={this.props.productImage}
        productImageTouched={this.props.productImageTouched}
        uploadImage={
          this.props.productUploadedImage
            ? this.props.productUploadedImage
            : API.getProductImageUrl()
        }
        fileUpload={this.fileUpload.bind(this)}
        initialValues={this.props.initialValues}
      />
    );
  }
}

const mapStateToProps = state => {
  let d = {
    productImageTouched: state.addProduct.productImageTouched,
    productImage: state.addProduct.productImage,
    productSaved: state.addProduct.productSaved,
    productUploadedImage: state.addProduct.productUploadedImage,
    isOldProduct: state.addProduct.isOldProduct,
    initialValues: state.addProduct.data
  };
  return d;
};
export default connect(mapStateToProps)(ProductFormContainer);
