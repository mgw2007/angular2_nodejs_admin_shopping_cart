import React from "react";
import { connect } from "react-redux";
import { updateTitle as updatePageTitle } from "redux-title";

class AdminFormContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(updatePageTitle("Add Admin"));
  }
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}
export default connect()(AdminFormContainer);
