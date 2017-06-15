import React, { Component, render } from "react";
import { connect } from "react-redux";
import Layout from "../components/app/Layout";
import { getUserData } from "../actions/appActions";
import FlashMessages from "./FlashMessageContainer";
import { replace } from "react-router-redux";

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserData());
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.authenticated && nextProps.dataFetched) {
      this.props.dispatch(replace("/login"));
    }
  }

  render() {
    return (
      <Layout
        children={this.props.children}
        router={this.props.router}
        user={this.props.user}
        pageTitle={this.props.pageTitle}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.app.user,
    dataFetched: state.app.dataFetched,
    authenticated: state.app.authenticated,
    pageTitle: state.title
  };
};

export default connect(mapStateToProps)(AppContainer);
