import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </>
    );
};

export default Home;