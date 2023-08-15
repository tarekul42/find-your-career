import React from 'react';
import './JobCategory.css'
import DescriptionText from '../Description-text/DescriptionText';
import CombinedTitle from '../CombinedTitle/CombinedTitle';

const JobCategory = ({job}) => {
    const {image, sector, available_jobs} = job;
    return (
        <div className='w-80 h-60 p-10 rounded-lg bg-slate-50'>
            <img className='h-20 w-20 p-4 bg-slate-200 rounded-md' src={image} alt="" />
            <div className='pt-8 pb-8'>
            <CombinedTitle>{sector}</CombinedTitle>
            <DescriptionText>{available_jobs} Jobs Available</DescriptionText>
            </div>
        </div>
    );
};

export default JobCategory;