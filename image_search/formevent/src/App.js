import React, { Component } from "react";
import SearchBar from "./compontent/SearchBar";
import ImageList from "./compontent/ImageList";
import api from "./api/api";
export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await api.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar userSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
