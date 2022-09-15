import React, { Component } from "react";

import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../redux/action";

class ReduxGoogleAuth extends Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //   listner
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.loginUser(this.auth.currentUser.get().getId());
    } else {
      this.props.logoutUser();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthentication() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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
// const mapStateToProps = (state) => {
//   return { isSignedIn: state.auth.isSignedIn };
// };

export default connect(null, { loginUser, logoutUser })(ReduxGoogleAuth);
