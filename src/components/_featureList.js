import React, { useState, useEffect } from 'react';
import FeaturedPiece from '../components/_featuredPiece';
import { Link } from 'react-router-dom';

const FeaturedList = ({match}) => {
    const name = match.params.name;
    const [ featured, setFeatured ] = useState([{}]);
    
    useEffect( () => {
        const fetchData = async () => {
            const results = await fetch(`/api/featured-pieces`);
            const body = await results.json();
            setFeatured(body);
        };
        fetchData();
    }, [name]);

    return (
        <>
            { featured.map( (piece, key) => (
                <Link className="featured-link" key={key} to={`/piece/${piece.name}`}>
                    <FeaturedPiece piece={ piece } />
                </Link>
            ))}
        </>
    );
};

export default FeaturedList;