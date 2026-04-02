import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            <Outlet className= 'flex-1'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;