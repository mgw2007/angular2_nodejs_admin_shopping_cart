import React, {Component, render} from "react";
import {connect} from "react-redux";
import {updateTitle as updatePageTitle} from "redux-title";
import middleware, {when, once} from "redux-when";
import ProductList from "../components/product/ProductList";
import {getProducts, deleteProduct} from "../actions/productActions";
import Bootstrap from "../actions/bootstrapActions";
class ProductListContainer extends Component {
    componentDidMount() {
        this.props.dispatch(updatePageTitle("Products"));
        this.props.dispatch(getProducts());
    }
    componentDidUpdate(prevProps) {
        const { productIsDelete, dispatch } = this.props; // new props
        if (prevProps.productIsDelete && !productIsDelete) {
            // in case we make delete
            this.props.dispatch(getProducts());
            this.props.dispatch(Bootstrap.hideLoader());
        }
    }
    deleteProduct(id) {
        this.props.dispatch(Bootstrap.openConfirmModal("Are you sure from delete product ?", () => {
            this.props.dispatch(Bootstrap.closeConfirmModal());
            this.props.dispatch(Bootstrap.showLoader());
            this.props.dispatch(deleteProduct(id))
        }))
    }

    render() {
        return <ProductList products={this.props.products} deleteProduct={this.deleteProduct.bind(this)}/>;
    }
}

const mapStateToProps = state => {
    return {
        products: state.product.products,
        productIsDelete: state.product.productIsDelete,
    };
};

export default connect(mapStateToProps)(ProductListContainer);
