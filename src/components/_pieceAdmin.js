import React from 'react';

const PieceAdmin = ( { pieces, pieceKeys } ) => {

    return (
        <>  
            <div className="grid-container">
                <div className="grid-x">
                    <table>
                        <thead>
                            <tr>
                                {
                                    pieceKeys.map( (piece, key) => (
                                        <th key={key}>{ piece.toString() }</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            { pieces.map( (piece, key) => (
                                    <tr key={key} >
                                        <td>{piece._id}</td>
                                        <td>{piece.alt}</td>
                                        <td>{piece.featured}</td>
                                        <td>{piece.features}</td>
                                        {/* <td>{piece.images}</td> */}
                                        {/* <td>{piece.longDescription}</td> */}
                                        {/* <td>{piece.name}</td> */}
                                        {/* <td>{piece.shortDescription}</td> */}
                                        {/* <td>{piece.title}</td> */}
                                    </tr>
                                )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PieceAdmin;