import React, { Component } from "react";
import ImageCard from "../ImageCard";
import "./style.css";
export default class ImageList extends Component {
  render() {
    const { images } = this.props;
    return (
      <div>
        <div className="image_list">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      </div>
    );
  }
}
