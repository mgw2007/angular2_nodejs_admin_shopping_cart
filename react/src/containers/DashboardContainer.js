import React from "react";
import { connect } from "react-redux";
import { updateTitle as updatePageTitle } from "redux-title";

class DashboardContainer extends React.Component {
  componentDidMount() {
      this.props.dispatch(updatePageTitle('Dashboard'))
  }
  render() {
    return (
      <div>

        <h1>Das111</h1>
      </div>
    );
  }
}
export default connect()(DashboardContainer);
