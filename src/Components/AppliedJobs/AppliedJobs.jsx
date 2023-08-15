import React, { useState } from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';
import { useLoaderData } from 'react-router-dom';
import ReviewJobs from '../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    let savedJobs = useLoaderData();
    console.log(savedJobs);

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center py-20'>
            <CommonHeader>Applied Jobs</CommonHeader>
            </div>
            <div className='appliedJobs'>
                
                    {
                        savedJobs.map(jobs => <ReviewJobs
                        key={jobs.id}
                        jobs={jobs}
                        ></ReviewJobs> )
                    }
                
            </div>
        </div>
    );
};

export default AppliedJobs;