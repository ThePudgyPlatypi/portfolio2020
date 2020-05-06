import React, { useState, useEffect } from 'react';
import PieceAdmin from '../components/_pieceAdmin';
import FetchData from '../helpers/fetchData';

const AdminPage = ({ match }) => {
    // will need to be able to add/delete/update pieces and all the content involved with them
    // need to be able to update basic information on each page
    // will need to be able to update skills and resume stuff
    const name = match.params.name;
    const [isLoading, setIsLoading] = useState(true);
    const [pieces, setPieces ] = useState([]);
    const [pieceKeys, setPieceKeys ] = useState([]);
    
    useEffect( () => {
        FetchData('/api/pieces', setPieces);
        FetchData('/api/piece-keys', setPieceKeys);
        setIsLoading(false);
    }, []);

    return (
        isLoading ? <div className="loading">Loading...</div> : <PieceAdmin pieces = { pieces } pieceKeys = { pieceKeys } />
    );
};

export default AdminPage;