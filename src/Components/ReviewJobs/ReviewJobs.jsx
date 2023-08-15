import React from 'react';
import CombinedTitle from '../CombinedTitle/CombinedTitle';
import DescriptionText from '../Description-text/DescriptionText';
import JobTypesButton from '../jobTypesButton/JobTypesButton';
import {MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import DetailsButton from '../DetailsButton/DetailsButton';

const ReviewJobs = ({jobs}) => {
    const {company_logo, job_title, company_name, job_type, location, salary_range} = jobs;
    return (
        <div className='w-full border-2 m-4 border-slate-300 rounded-lg p-8 flex items-center gap-4'>
            <div className='flex-none'>
                <img className='w-60 h-60 rounded-md' src={company_logo}  alt="" />
            </div>
            <div className='flex-grow'>
                <CombinedTitle>{job_title}</CombinedTitle>
                <DescriptionText>{company_name}</DescriptionText>
                <div>
                    {
                    job_type.map(job => <JobTypesButton key={job}>{job}</JobTypesButton> )
                    }
                </div> 
                <div className='flex pt-3'>
                    <MapPinIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                    <DescriptionText>{location}</DescriptionText>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-400" /> &nbsp;
                    <DescriptionText>{salary_range}</DescriptionText>
                </div>
            </div>
            <div>
                <Link to='/jobDetails'>           
                    <span onClick={() => handleViewDetails(featuredJob)}>
                        <DetailsButton>View Details</DetailsButton>
                    </span>     
                </Link>
            </div>
            
            
        </div>
    );
};

export default ReviewJobs;