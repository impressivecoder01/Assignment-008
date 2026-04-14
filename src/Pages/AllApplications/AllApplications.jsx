import React from 'react';
import useLoadData from '../../Components/Hooks/useLoadData';

const AllApplications = () => {
    const data = useLoadData()
    console.log(data.appData)
    return (
        <div className='flex flex-col items-center justify-center w-11/12 mx-auto'>
            <h1>Our All Applications</h1>
            <h6>Explore All Apps on the Market developed by us. We code for Millions</h6>
        </div>
    );
};

export default AllApplications; 