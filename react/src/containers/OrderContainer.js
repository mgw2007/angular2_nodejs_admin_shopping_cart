import React from "react";
import {connect} from "react-redux";
import {updateTitle as updatePageTitle} from "redux-title";

class OrderContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(updatePageTitle("Orders"));
    }

    render() {
        return (
            <div>
                <h1>Order</h1>
            </div>
        );
    }
}

export default connect()(OrderContainer);
