import React, { useState } from 'react';
import useLoadData from '../../Components/Hooks/useLoadData';
import TCard from '../../Components/Cards/TCard';

const AllApplications = () => {
   
 const [search, setSearch] = useState('')
    console.log(search)
    const { appData } = useLoadData()
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? appData.filter(app => app.companyName.toLocaleLowerCase().includes(term)) : appData
    console.log(searchedApps)
    return (
        <div className=' w-11/12 mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-3xl font-semibold'>Our All Applications</h1>
                <h6>Explore All Apps on the Market developed by us. We code for Millions</h6>
            </div>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='font-bold'>{searchedApps.length} Apps Found</h1>
                <label className="input">
                    <span className="label"></span>
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="search here" />
                </label>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    searchedApps.map(data => <TCard key={data.id} data={data}></TCard>)
                }
            </div>
        </div>
    );
};

export default AllApplications; 