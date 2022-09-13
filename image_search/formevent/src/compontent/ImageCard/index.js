import React, { Component, createRef } from "react";

export default class ImageCard extends Component {
  imageRef = createRef();

  state = { spans: 0 };

  componentDidMount() {
    //  console.log("imageRef", this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={alt_description}
          src={urls.regular}
          loading="lazy"
        />
      </div>
    );
  }
}
