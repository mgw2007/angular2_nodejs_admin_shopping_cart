import React from "react";

export default  (props) => (
    <div
        className="loader-wrapper app-loader"
        style={{display: props.loader ? "" : "none"}}
    >
        <div className="loader">Loading...</div>
    </div>
);
