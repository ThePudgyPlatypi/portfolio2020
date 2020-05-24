import React from "react";

class UpdateMultipleInput extends React.Component {
  render() {
    const features = this.props.features;

    return features ? features.map((value, key) => <p key={key}>{value.name}-feature</p>) : "There are no features yet";
  }
}

export default UpdateMultipleInput;