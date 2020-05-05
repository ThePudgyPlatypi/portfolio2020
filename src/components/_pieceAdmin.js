import React from 'react';
import { parseData } from '../helpers/parseData';

class PieceAdmin extends React.Component {
    render() {
        const pieces = this.props.pieces;
        const pieceKeys = this.props.pieceKeys;

        return (
            <>  
                <div className="grid-container">
                    <div className="grid-x">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Images</th>    
                                    <th>Alt Text</th>
                                    <th>Short Description</th>
                                    <th>Long Description</th>
                                    <th>Features</th>
                                    <th>Featured?</th>
                                </tr>
                            </thead>
                            <tbody>
                                { pieces.map( (piece, key) => (
                                    <PieceListRow piece={piece} key={key} />
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

class PieceListRow extends React.Component {
    render() {
        const piece = this.props.piece;
        
        return (
            <tr>
                <PieceListItem pieceItem={piece} />
            </tr>
        );
    }
}

class PieceListItem extends React.Component {
    render() {
        const pieceItem = this.props.pieceItem;

        return (
            <>
                { Object.values(pieceItem).map( (item, key) => (
                    <td key={key}> <p> { parseData(item) } </p> </td>
                ) ) }

            </>
        );
    }
}

export default PieceAdmin;