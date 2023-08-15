import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const AvailableJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() =>{
        fetch('jobCategoryList.json').then(res => res.json()).then(data => setJobs(data))
    } , [])
    return (
        <div className='flex gap-3'>
            {
                jobs.map(job => <JobCategory key={job.id} job={job} ></JobCategory> )
            }
        </div>
    );
};

export default AvailableJobs;