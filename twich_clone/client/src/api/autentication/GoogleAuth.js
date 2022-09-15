import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email",
          plugin_name: "streamapp",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //   listner
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthentication() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignOutClick}>SignOut</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignInClick}>SignIn With Google</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthentication()}</div>
      </div>
    );
  }
}
