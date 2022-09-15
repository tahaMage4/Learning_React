import React, { Component } from "react";
// import CreateRoutes from "./routes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./compontent/Navbar";
import { StreamCreate, StreamDelete } from "./compontent/Stream";

// const routes = CreateRoutes;
export default class App extends Component {
  render() {
    // return <>{routes === true ? routes : null}</>;
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<StreamCreate />} />
          <Route path="/stream" element={<StreamDelete />} />
          {/* <Route path="/profile/:id" element={<About />} /> */}
        </Routes>
      </>
    );
  }
}
