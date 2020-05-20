import React from 'react';

class UpdateImageGrid extends React.Component {
  render() {
    const imgArray = this.props.images;

    if (imgArray && imgArray.length === 0) {
      imgArray.push("Dummy");
    }

    return imgArray.map((value, key) => <p key={key}>Image-{key + 1}</p>);
  }
}

export default UpdateImageGrid;