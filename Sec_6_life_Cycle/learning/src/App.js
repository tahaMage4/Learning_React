import React, { Component } from "react";
import Latitude from "./Latitude";

export default class App extends Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.errorMessage })
    );
  }

  // Helper function
  renderContent() {
    if (!this.setState.lat && this.setState.errorMessage) {
      return <div>Error : {this.setState.errorMessage}</div>;
    }
    if (!this.setState.errorMessage && this.setState.lat) {
      return <Latitude lat={this.setState.lat} />;
    }
    return <div> loading.....</div>;
  }

  render() {
    return <div style={{ border: "red" }}>{this.renderContent()}</div>;
  }
}
