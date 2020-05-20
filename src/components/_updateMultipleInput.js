import React from "react";

class UpdateMultipleInput extends React.Component {
  render() {
    const features = this.props.features;

    if (features && features.length === 0) {
      features.push("Dummy");
    }

    return features.map((value, key) => <p key={key}>{value.name}-feature</p>);
  }
}

export default UpdateMultipleInput;