import React from "react";
import { UserAuthWrapper } from "redux-auth-wrapper";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import Login from "../components/login/Login";
import { loginInUser } from "../actions/authActions";

class LoginContainer extends React.Component {
  submitLogin(values) {
    this.props.loginInUser(values, "/");
  }
  render() {
    return (
      <Login
        hasError={this.props.hasError}
        router={this.props.router}
        onSubmit={values => this.submitLogin(values)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    hasError: state.auth.hasError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginInUser: (val, redirectUrl) => dispatch(loginInUser(val, redirectUrl))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
