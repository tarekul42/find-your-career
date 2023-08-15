import React from 'react';
import './CommonHeader.css'

const CommonHeader = ({children}) => {
    return (
        <div className='common-header'>
            {children}
        </div>
    );
};

export default CommonHeader;