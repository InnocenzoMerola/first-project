import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageSrc} alt={this.props.imageAlt} className="my-img" />
      </div>
    );
  }
}

export default ImageComponent;
