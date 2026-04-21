import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <Navbar></Navbar>
            <main className= 'flex-1'>

            <Outlet ></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;