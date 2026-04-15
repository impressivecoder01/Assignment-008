import React from 'react';
import useLoadData from '../../Components/Hooks/useLoadData';

const AllApplications = () => {
    const {appData,loading,error} = useLoadData()
    console.log(appData)
    return (
        <div className='flex flex-col items-center justify-center w-11/12 mx-auto'>
            <h1>Our All Applications</h1>
            <h6>Explore All Apps on the Market developed by us. We code for Millions</h6>
            <h1></h1>
        </div>
    );
};

export default AllApplications; 