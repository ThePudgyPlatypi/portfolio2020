import React, { useState, useEffect } from 'react';
import FetchData from '../helpers/fetchData';
import GetKeyByValue from '../helpers/getKeyByValue';

const AdminPage = ({ match }) => {
    // will need to be able to add/delete/update pieces and all the content involved with them
    // need to be able to update basic information on each page
    // will need to be able to update skills and resume stuff
    const name = match.params.name;
    const [isLoading, setIsLoading] = useState(true);
    const [pieces, setPieces ] = useState([]);
    
    
    useEffect( () => {
        FetchData('/api/pieces', setPieces);
        setIsLoading(false);
    }, []);

    return (
        isLoading ? <div className="loading">Loading...</div> : <PieceAdmin pieces = { pieces } />
    );
};

const PieceAdmin = ({ pieces }) => {
    return (
        <>  
            <div className="grid-container">
                <div className="grid-x">
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

const PieceListItem = ( {pieceItem} ) => {
    return (
        <>
            <td className="">
                <UpdateValueInput id={pieceItem._id} keyVal={ GetKeyByValue(pieceItem, pieceItem.name) } value={pieceItem.name} />
            </td>
            <td className="">
                <UpdateValueText id={pieceItem._id} keyVal={ GetKeyByValue(pieceItem, pieceItem.title ) } value={ pieceItem.title } />
            </td>
            <td className="">< PieceThumbnail imageSRC={pieceItem.images}/></td>
            <td className="">< PieceImageList images={pieceItem.images.list}/></td>
            <td className="">
                <UpdateValueText id={pieceItem._id} keyVal={ GetKeyByValue(pieceItem, pieceItem.alt) } value={ pieceItem.alt } />
            </td>
            <td className="">{ pieceItem.shortDescription }</td>
            <td className="">< PieceLongDescription desc={ pieceItem.longDescription } /></td>
            <td className="">< PieceFeatures features={ pieceItem.features } /></td>
            <td className="">< UpdateValueCheck id={pieceItem._id} keyVal={ GetKeyByValue(pieceItem, pieceItem.featured) } value={ pieceItem.featured } /></td>
            <td className="delete"><button className="button alert">x</button></td>
        </>
    );
}

const UpdateValueInput = ({ id, keyVal, value }) => {
    const [updatedPiece, setUpdatedPiece ] = useState(value);

    const update = async () => {
        
        const result = await fetch(`/api/pieces/${id}/${keyVal}/update-piece`, {
            method: 'post',
            body: JSON.stringify({
                "value": updatedPiece
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    return (
        <>
            <label>
                <input type="text" value={updatedPiece} 
                onChange={ 
                    (event) => {
                        setUpdatedPiece(event.target.value)
                    }
                } onBlur={ () => { update() } }/>
            </label>
        </>
    );
}

const UpdateValueText = ({ id, keyVal, value }) => {
    const [updatedPiece, setUpdatedPiece ] = useState(value);

    const update = async () => {
        
        const result = await fetch(`/api/pieces/${id}/${keyVal}/update-piece`, {
            method: 'post',
            body: JSON.stringify({
                "value": updatedPiece
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    return (
        <>
            <label>
                <textarea rows="5" value={updatedPiece} 
                onChange={ 
                    (event) => {
                        setUpdatedPiece(event.target.value)
                    }
                } onBlur={ () => { update() } }/>
            </label>
        </>
    );
}

const UpdateValueCheck = ({ id, keyVal, value }) => {
    // const [updatedPiece, setUpdatedPiece ] = useState(value);
    const [checked, setChecked] = useState(value)

    const update = async () => {
        await fetch(`/api/pieces/${id}/${keyVal}/update-piece`, {
            method: 'post',
            body: JSON.stringify({
                "value": checked
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // const body = await result.json();
        // setChecked(body.value);
    }

    return (
        <>  
            <p>Would you like this Featured?</p>
            <div className="switch large">
                <input className="switch-input" id={`${id}-yes-no`} type="checkbox" name="featuredSwitch" checked={checked} onChange={ 
                    (event) => {
                        setChecked(event.target.checked);
                        update();
                    }
                } />
                <label className="switch-paddle" htmlFor={`${id}-yes-no`}>
                    <span className="show-for-sr">Would you like this Featured?</span>
                    <span className="switch-active" aria-hidden="true">Yes</span>
                    <span className="switch-inactive" aria-hidden="true">No</span>
                </label>
            </div>
        </>
    );
}

class PieceThumbnail extends React.Component {
    render() {
        const imageSRC = this.props.imageSRC;
        
        return (
            <>
                <div className="grid-x">
                    <div className="cell small-12">
                        <img src={imageSRC && imageSRC.thumbnail} alt="Piece Thumbnail" />  
                    </div>

                    <div className="cell small-12">
                        <label htmlFor="thumbUpload" className="button">Upload File</label>
                        <input type="file" id="thumbUpload" className="show-for-sr"></input>
                    </div>
                </div>
                
                
            </>
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

        return desc.map( (value, key) => (<p key={key}>{value}</p>));
    }
}

class PieceFeatures extends React.Component {
    render() {
        const features = this.props.features;

        if(features && features.length === 0) {
            features.push("Dummy");
        }

        return features.map((value, key) => (<p key={key}>{value.name}-feature</p>));
    }
}

export default AdminPage;