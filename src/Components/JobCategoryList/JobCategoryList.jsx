import React from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';
import DescriptionText from '../Description-text/DescriptionText';
import AvailableJobs from '../AvailableJobs/AvailableJobs';

const jobCategoryList = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center pt-2'>
                <CommonHeader>Job Category List</CommonHeader>
                <DescriptionText>Explore thousands of job opportunities with all the information you need. Its your future</DescriptionText>
            </div>
            <AvailableJobs></AvailableJobs>
        </div>
    );
};

export default jobCategoryList;