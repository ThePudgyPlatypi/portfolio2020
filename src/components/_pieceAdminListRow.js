import React from "react";
import PieceAdminListColumn from "./_pieceAdminListColumn";

class PieceAdminListRow extends React.Component {
  render() {
    const piece = this.props.piece;

    return (
      <>
        <table className="hover unstriped stack">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th width="200">Title</th>
              <th width="200">Thumbnail</th>
              <th>Images</th>
              <th width="200">Alt Text</th>
              <th width="300">Short Description</th>
              <th width="300">Long Description</th>
              <th>Features</th>
              <th>Featured?</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PieceAdminListColumn pieceItem={piece} />
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default PieceAdminListRow;
