import React from 'react';
import content from '../resources/siteContent'

const PiecePage = ({match}) => {
    const name = match.params.name;
    const piece = content[1].pieces.find(piece => piece.name === name);

    return (
        <h1>You are on a piece called {piece.title}</h1>
    );
};

export default PiecePage;