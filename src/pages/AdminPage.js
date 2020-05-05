import React, { useState, useEffect } from 'react';
import PieceAdmin from '../components/_pieceAdmin';

const AdminPage = ({ match }) => {
    // will need to be able to add/delete/update pieces and all the content involved with them
    // need to be able to update basic information on each page
    // will need to be able to update skills and resume stuff
    const name = match.params.name;
    const [isLoading, setIsLoading] = useState(false);
    const [pieces, setPieces ] = useState([{}]);
    const [pieceKeys, setPieceKeys ] = useState([{}]);

    const fetchData = async (url, stateSetter) => {
        const rawData = await fetch(url);
        const parseData = await rawData.json();
        stateSetter(parseData);
    }

    useEffect( () => {
        setIsLoading(true);
        fetchData('/api/pieces', setPieces);
        fetchData('/api/piece-keys', setPieceKeys);
        setIsLoading(false);
    }, []);


    return (
        isLoading ? <div className="loading">Loading...</div> : <PieceAdmin pieces = { pieces } pieceKeys = { pieceKeys } />
    );
};

export default AdminPage;