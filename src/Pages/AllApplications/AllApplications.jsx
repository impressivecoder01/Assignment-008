import React from 'react';
import useLoadData from '../../Components/Hooks/useLoadData';
import TCard from '../../Components/Cards/TCard';

const AllApplications = () => {
    const { appData } = useLoadData()
    console.log(appData)
    return (
        <div className=' w-11/12 mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-3xl font-semibold'>Our All Applications</h1>
                <h6>Explore All Apps on the Market developed by us. We code for Millions</h6>
            </div>
                <h1 className='font-bold'>{appData.length} Apps Found</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        appData.map(data => <TCard key={data.id} data={data}></TCard>)
                    }
                </div>
        </div>
    );
};

export default AllApplications; 