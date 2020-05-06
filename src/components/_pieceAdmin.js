import React from 'react';
// import { parsePieceData } from '../helpers/parsePieceData';

class PieceAdmin extends React.Component {
    render() {
        const pieces = this.props.pieces;
        // const pieceKeys = this.props.pieceKeys;

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
                                    <th>Thumbnail</th>   
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
                <td className="">{ pieceItem._id }</td>
                <td className="">{ pieceItem.name }</td>
                <td className="">{ pieceItem.title }</td>
                <td className="">< PieceThumbnail imageSRC={pieceItem.images}/></td>
                <td className="">< PieceImageList images={pieceItem.images.list}/></td>
                <td className="">{ pieceItem.alt }</td>
                <td className="">{ pieceItem.shortDescription }</td>
                <td className="">< PieceLongDescription desc={ pieceItem.longDescription } /></td>
                <td className="">< PieceFeatures features={ pieceItem.features } /></td>
                <td className="">{ pieceItem.featured.toString() }</td>
            </>
        );
    }
}

class PieceThumbnail extends React.Component {
    render() {
        const imageSRC = this.props.imageSRC;
        
        return (
            <img src={imageSRC && imageSRC.thumbnail} alt="Piece Thumbnail" />
        )
    }
}

class PieceImageList extends React.Component {
    render() {
        const imgArray = this.props.images;

        if(imgArray && imgArray.length === 0) {
            imgArray.push("Dummy");
        }

        return imgArray.map( (value, key) => (<p key={key}>Image-{key+1}</p>));
    }
}

class PieceLongDescription extends React.Component {
    render() {
        const desc = this.props.desc;

        if(desc && desc.length === 0) {
            desc.push("Dummy");
        }

        return desc.map( (value, key) => (<p key={key}>Paragraph-{key+1}</p>));
    }
}

class PieceFeatures extends React.Component {
    render() {
        const features = this.props.features;

        if(features && features.length === 0) {
            features.push("Dummy");
        }

        return features.map((value, key) => (<p key={key}>{value}-feature</p>));
    }
}

export default PieceAdmin;