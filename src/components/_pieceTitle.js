import React, { useState } from 'react';

const PieceTitle = ({title}) => {
    const [newTitle, setNewTitle] = useState("");
    setNewTitle(title);

    return {newTitle}
}

export default PieceTitle;