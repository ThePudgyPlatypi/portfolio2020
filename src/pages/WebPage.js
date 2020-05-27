import React, { useState, useEffect } from 'react';
import FetchData from "../helpers/fetchData";

const WebPage = ({match}) => {
    const name = match.params.name;
    const [ webPieces, setWebPieces ] = useState([]);
    
    useEffect( () => {
        // FetchData()
        //     const results = await fetch(`/api/featured-pieces`);
        //     const body = await results.json();
        //     setWebPieces(body);
        // };
        // fetchData();
    }, [name]);
};

export default WebPage;