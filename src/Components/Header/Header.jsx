import React from 'react';
import './Header.css'
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import JobCategoryList from '../jobCategoryList/jobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Header = () => {
    return (
        <div>
            <HeaderBanner/>
            <JobCategoryList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Header;