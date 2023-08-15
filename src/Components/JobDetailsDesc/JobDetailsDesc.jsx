import React from 'react';
import './JobDetailsDesc.css'

const JobDetailsDesc = ({children}) => {
    return (
        <div>
            <p className='detailsDescription'>{children}</p>
        </div>
    );
};

export default JobDetailsDesc;