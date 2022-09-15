import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StreamDelete extends Component {
  render() {
    return (
      <div>
        <h1>StreamDelete</h1>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
}
