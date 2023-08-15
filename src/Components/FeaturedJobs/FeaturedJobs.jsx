import React, { useEffect, useState } from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';
import DescriptionText from '../Description-text/DescriptionText';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Button from '../Button/Button';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() =>{
        fetch('featuresJobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    } ,[])


    return (
        <div className='max-w-screen-xl mx-auto pt-7'>
            <div className='text-center'>
            <CommonHeader>Featured Jobs</CommonHeader>
            <DescriptionText>Explore thousands of job opportunities with all the information you need. Its your future</DescriptionText>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob} ></FeaturedJob> )
                }
            </div>
            <div className='text-center pt-10 pb-10'>
                <span onClick={() => handleShowAll()}>
            <Button>See All Jobs</Button>
                </span>
            </div>
        </div>
    );
};

export default FeaturedJobs;