import React from 'react';
import './JobTypesButton.css'

const JobTypesButton = ({children}) => {
    return (
        <button className='jobTypesButton mr-3 '>{children}</button>
    );
};

export default JobTypesButton;