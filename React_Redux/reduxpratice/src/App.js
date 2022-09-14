import React, { Component } from "react";
import { createclaim, deletepolicy, createploicy } from "./redux/action";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

// const count = useSelector((state) => state.count.counter);
// const signed = useSelector((state) => state.auth.signed);
// const dispatch = useDispatch;

class App extends Component {
  render() {
    console.log(this.props, "props data");
    return (
      <div>
        <button>
          <div onClick={() => console.log("Click data")}>Data Click</div>
        </button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state, "state");
  return state;
};

export default connect(mapStatetoProps, {
  createploicy,
  createclaim,
  deletepolicy,
})(App);
