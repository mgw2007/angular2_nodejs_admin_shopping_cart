import React, { Component, render } from "react";
import { connect } from "react-redux";
import { showLoader, hideLoader } from "../actions/loaderActions";

class PageLoaderContainer extends Component {
  render() {
    return (
      <div
        className="loader-wrapper app-loader"
        style={{ display: this.props.loader ? "" : "none" }}
      >
        <div className="loader">Loading...</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loader: state.pageLoader.showLoader
  };
};

export default connect(mapStateToProps)(PageLoaderContainer);
