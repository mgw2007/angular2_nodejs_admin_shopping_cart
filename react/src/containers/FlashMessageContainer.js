import React, { Component, render } from "react";
import { connect } from "react-redux";
import FlashMessageTemplate from "../components/flashMessage/flashMessage";
import {
  removeFlashMessage,
  addFlashMessage
} from "../actions/flashMessageActions";

class FlashMessageContainer extends Component {
  componentDidUpdate() {
    const messages = this.props.flashMessages.map((message, i) => {
      $.notify(
        { message: message.message },
        { type: message.type, placement: { from: "top", align: "center" } }
      );
    });
  }
  render() {
    // const messages = this.props.flashMessages.map((message, i) => {
    //   return jQuery.notify(
    //     { message: message.message },
    //     { type: message.type, placement: { from: "top", align: "center" } }
    //   );
    // <FlashMessageTemplate
    //   flashMessage={message}
    //   key={i}
    //   id={i}
    //   removeFlashMessage={ii => this.props.removeFlashMessage(ii)}
    // />
    // });
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    flashMessages: state.flashMessage
  };
};

export default connect(mapStateToProps, { removeFlashMessage })(
  FlashMessageContainer
);
