import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

export default props =>
  <div className="hold-transition login-page">
    <div className="login-box">
      <div className="login-logo">
        <a href="javascript:;"><b>Admin</b>LTE</a>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <div
          className="alert alert-danger alert-dismissible "
          style={{ display : !props.hasError ? "none" : ""}}
        >
          <button
            aria-hidden="true"
            data-dismiss="alert"
            className="close"
            type="button"
          />
          Invalid username or password.
        </div>
        <LoginForm onSubmit={props.onSubmit} />
      </div>
    </div>
  </div>;
