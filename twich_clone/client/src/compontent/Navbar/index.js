import React, { Component } from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "../../api/autentication/GoogleAuth";
import ReduxGoogleAuth from "../../api/autentication/ReduxGoogleAuth";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
          {/* <GoogleAuth /> */}
          <ReduxGoogleAuth />
        </nav>
      </div>
    );
  }
}
