import React, { Component, render } from "react";
import { connect } from "react-redux";
import { updateTitle as updatePageTitle } from "redux-title";
import ProductList from "../components/product/ProductList";
import { getProducts } from "../actions/productActions";
class ProductListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(updatePageTitle("Products"));
    this.props.dispatch(getProducts());
  }

  render() {
    return <ProductList products={this.props.products} />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};

export default connect(mapStateToProps)(ProductListContainer);
