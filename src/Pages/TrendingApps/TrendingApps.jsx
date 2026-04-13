import React from 'react';
import TCard from '../../Components/Cards/TCard';

const TrendingApps = ({datas}) => {
    // console.log(datas)
    return (
        <div className='py-3'>
            <h1 className='text-center text-5xl py-5 font-extrabold'>Trending Apps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    datas.map(data => <TCard data={data}></TCard>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;