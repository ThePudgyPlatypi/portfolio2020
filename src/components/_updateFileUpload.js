import React from "react";
// import updateField from "../helpers/updateField";

class FileUpload extends React.Component {
  render() {
    const imageSRC = this.props.imageSRC;

    return (
      <>
        <div className="grid-x">
          <div className="cell small-12">
            <img src={imageSRC && imageSRC.thumbnail} alt="Piece Thumbnail" />
          </div>

          <div className="cell small-12">
            <label htmlFor="thumbUpload" className="button">
              Upload File
            </label>
            <input type="file" id="thumbUpload" className="show-for-sr"></input>
          </div>
        </div>
      </>
    );
  }
}

export default FileUpload;