import React from 'react';
import './CombinedTitle.css'

const CombinedTitle = ({children}) => {
    return (
        <p className='sector'>{children}</p>
    );
};

export default CombinedTitle;