import React, { useState, useEffect } from 'react';
import PieceAdmin from '../components/_pieceAdmin';

const AdminPage = ({ match }) => {
    // will need to be able to add/delete/update pieces and all the content involved with them
    // need to be able to update basic information on each page
    // will need to be able to update skills and resume stuff
    const name = match.params.name;
    const [pieces, setPieces ] = useState([{}]);
    const [pieceKeys, setPieceKeys ] = useState([{}]);

    useEffect( () => {
        const fetchData = async () => {
            const pieces = await fetch(`/api/pieces`);
            const pieceKeys = await fetch(`/api/piece-keys`);
            const piecesResults = await pieces.json();
            const pieceKeysResults = await pieceKeys.json();
            
            setPieces(piecesResults);
            setPieceKeys(pieceKeysResults);
        }
        fetchData();
    }, [name]);

    return (
        <>
             <PieceAdmin pieces = { pieces } pieceKeys = { pieceKeys } />
        </>
    );
};

export default AdminPage;