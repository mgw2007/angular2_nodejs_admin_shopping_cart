import React from "react";
import { connect } from "react-redux";
import { updateTitle as updatePageTitle } from "redux-title";

class AdminListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(updatePageTitle("Admins"));
  }
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}
export default connect()(AdminListContainer);
