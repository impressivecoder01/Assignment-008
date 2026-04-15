import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
// import { useLoaderData } from 'react-router';

const Home = () => {
    // const datas = useLoaderData()
    // console.log(datas)

    return (
        <div>
            {/* <h1>This  is  home................</h1> */}
            <Banner></Banner>
           
                 
                <TrendingApps></TrendingApps>
                

        </div>
    );
};

export default Home;