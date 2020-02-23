import React from 'react';
import FeaturedPiece from '../components/_featuredPiece';

const featuredList = ({content}) => (
    <>
        { content[1].pieces.map( (piece, key) => (
            <FeaturedPiece piece={ piece } />
        ))}
    </>
);

export default featuredList;