import React, { Component, Fragment } from "react";

export class Loading extends Component {
  render() {
    return (
      <Fragment>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="loading ..."
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </Fragment>
    );
  }
}

export default Loading;
