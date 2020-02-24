import React from 'react';
import FeaturedPiece from '../components/_featuredPiece';
import { Link } from 'react-router-dom';

const featuredList = ({content}) => (
    <>
        { content[1].pieces.map( (piece, key) => (
            <Link className="featured-link" key={key} to={`/piece/${piece.name}`}>
                <FeaturedPiece piece={ piece } />
            </Link>
        ))}
    </>
);

export default featuredList;