import React, { useState, useEffect } from 'react';
import FetchData from '../helpers/fetchData';
import jQuery from 'jquery';

const PiecePage = ({match}) => {
    const name = match.params.name;
    // const piece = content[1].pieces.find(piece => piece.name === name);
    const [piece, setPiece] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        FetchData(`/api/piece/${name}`, setPiece);
        setIsLoading(false);
      }, [name]);

      // parse HTML from tinyMCE
      let longDescContainer = jQuery('#long-description');
      const longDescription = jQuery.parseHTML(piece.longDescription);
      longDescContainer.append(longDescription);

    
      return isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell small-12">
              <h1>You are on a piece called { piece.title }</h1>
              <div id="long-description"></div>
            </div>
          </div>
        </div>
        </>
      );
};

export default PiecePage;