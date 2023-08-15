import React from 'react';
import './DetailsButton.css'

const DetailsButton = ({children}) => {
    return (
        <button className='detailsButton'>{children}</button>
    );
};

export default DetailsButton;