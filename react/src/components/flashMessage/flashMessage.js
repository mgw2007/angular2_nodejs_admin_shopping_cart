import React from "react";

export default props => {
  console.log(props);
  return (
    <div className={"alert alert-" + props.flashMessage.type}>
      <button
        type="button"
        className="close"
        onClick={() => props.removeFlashMessage(props.id)}
      >
        &times;
      </button>
      {props.flashMessage.message}
    </div>
  );
};
