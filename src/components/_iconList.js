import React from 'react';

const iconList = ({links}) => (
    <>
        <ul className="icon-list">
            {links.map((link, key) => (
                <li key={key} className="icon">
                    <a href={link.value} target="_blank" rel="noopener noreferrer">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </>
);

export default iconList;