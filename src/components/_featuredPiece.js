import React from 'react';

const featuredPiece = ( {piece} ) => {
    if(piece.featured) {
        return ( 
            <>
                <div class="xy-grid">
                    <div class="cell small-12 medium-4">
                        <div class="featured image">
                            <img src=""
                        </div>
                    </div>

                    <div class="cell small-12 medium-8">
                        <h2>
                            {piece.title};
                        </h2>
                        <p>
                            { piece.shortDescription }
                        </p>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    };
};

export default featuredPiece;