import React from 'react';

const featuredPiece = ( {piece} ) => {
    if(piece.featured) {
        return ( 
            <>
                <div className="grid-x grid-margin-x grid-padding-x align-middle featured-wrapper">
                    <div className="cell small-12 medium-5 featured-image-wrapper">
                        <div className="featured-image">
                            <img src={piece.images.thumbnail} alt={piece.alt}/>
                        </div>
                    </div>

                    <div className="cell small-12 medium-7 featured-desc-wrapper">
                        <h2 className="featured-title">
                            {piece.title}
                        </h2>
                        <p className="featured-desc">
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