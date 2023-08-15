import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Nav = () => {
    return (
        <div className='pt-8'>
            <div className='max-w-screen-xl flex mx-auto justify-between items-center'>
            <div className='web-name-title'>Find Job and Start Career</div>
            <div className='nav-link'>
                <Link to='/'>Home</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='appliedJobs'>Applied Jobs</Link>
                <Link to='blogs'>Blog</Link>
            </div>
            <div>
                <Button>Start Applying</Button>
            </div>
            </div>
        </div>
    );
};

export default Nav;