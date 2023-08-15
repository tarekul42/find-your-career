import React from 'react';
import './Description-text.css'

const DescriptionText = ({children}) => {
    return (
            <p className='description'>{children}</p>
    );
};

export default DescriptionText;