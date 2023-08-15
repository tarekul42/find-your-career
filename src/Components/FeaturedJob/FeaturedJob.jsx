import React from 'react';
import CombinedTitle from '../CombinedTitle/CombinedTitle';
import DescriptionText from '../Description-text/DescriptionText';
import DetailsButton from '../DetailsButton/DetailsButton';
import JobTypesButton from '../jobTypesButton/JobTypesButton';
import { Link } from 'react-router-dom';
import {MapPinIcon } from '@heroicons/react/24/solid'

const FeaturedJob = ({featuredJob}) => {
    const {company_logo, job_title, company_name, job_type, location, salary_range} = featuredJob;

    const handleViewDetails = data =>{
            localStorage.setItem('viewDetails', JSON.stringify(data))
        }

    return (    
        <div className='p-10  border-2 rounded-md'>
            <img className='w-40 h-20 mb-8' src={company_logo} alt="" />
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
            <DescriptionText>{salary_range}</DescriptionText>
            </div>
            <Link to='/jobDetails'>           
            <span onClick={() => handleViewDetails(featuredJob)}>
            <DetailsButton>View Details</DetailsButton>
                </span>     
            </Link>
        </div>
    );
};

export default FeaturedJob;