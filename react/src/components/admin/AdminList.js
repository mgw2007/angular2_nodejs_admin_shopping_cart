import React from "react";
import {Link} from "react-router";
import {createGroupedArray} from "../../utils/index";
import API from "./../../actions/apiRequests";

export default props => {
    let productsGroup = createGroupedArray(props.products, 3);

    return (
        <div>
            {productsGroup.map((productg, gk) => {
                return (
                    <div className="row" key={gk}>
                        {productg.map((product, k) => {
                            var imageUrl = `${API.getProductImageUrl()}${product.imagePath}&w=188`;
                            return (
                                <div className="col-sm-6 col-md-4" key={`${gk}_${k}`}>
                                    <div className="thumbnail">
                                        <img src={imageUrl} alt="..."/>
                                        <div className="caption">
                                            <h3>{product.title}</h3>
                                            <p className="description">{product.description}</p>
                                            <div className="clearfix">
                                                <div className="price pull-left">${product.price}</div>
                                                <a className="btn btn-danger pull-right"
                                                   onClick={() => props.deleteProduct(product._id)}>Delete</a>
                                                <Link
                                                    to={`products/edit/${product._id}`}
                                                    className="btn btn-success pull-right"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
