import ReactDOM, { render } from "react-dom";
import React from "react";
import { browserHistory } from "react-router";
import { Provider } from "react-redux";
import { titleReducer, syncReduxAndTitle } from "redux-title";
import { AppRoutes } from "./routes";
import { syncHistoryWithStore } from "react-router-redux";
import { LOGIN_USER_SUCCESS } from "./actions/authActions";
import store from "./store";

const history = syncHistoryWithStore(browserHistory, store);

let token = localStorage.getItem("token");
if (token !== null) {
  store.dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { token: token }
  });
}
export class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes history={history} />
      </Provider>
    );
  }
}
