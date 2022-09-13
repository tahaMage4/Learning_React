import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  //   handleInputChange() {}

  onSubmitData = (e) => {
    e.preventDefault();

    // call_back child to parent
    this.props.userSubmit(this.state.term);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <form onSubmit={this.onSubmitData}>
          <h1> Image Search </h1>
          <div>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
          {this.state.term.length < 4 ? "Atleast type 4 letter" : null}
        </form>
      </div>
    );
  }
}
