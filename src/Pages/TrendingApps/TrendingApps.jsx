import React from 'react';
import TCard from '../../Components/Cards/TCard';
import { Link } from 'react-router';

const TrendingApps = ({datas}) => {
    // console.log(datas)
    const data = datas.slice(0,6)
    return (
        <div className='py-3'>
            <h1 className='text-center text-5xl py-5 font-extrabold'>Trending Apps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-3 items-center justify-center'>
                {
                    data.map(data => <TCard data={data}></TCard>)
                }
            </div>
            <div className='text-center'>
            <Link to={`/applications`} className='btn btn-primary '>Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;