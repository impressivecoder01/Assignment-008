import React from 'react';
import { Link } from 'react-router';

const TCard = ({data}) => {
    
    return (
        
        <Link to={`/application/${data.id}`}>
        <div >
            <div className="card bg-base-100 w-96 shadow-sm ">
            <figure>
                <img
                    src="https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fhome2%2Fbanner-thumbnail.jpg&w=3840&q=75"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.companyName}</h2>
                <h2 className="font-bold">{data.title}</h2>
                <p></p>
                <div className="flex justify-around ">
                   <p className='text-blue-950'>{data.downloads}</p>
                   
                   <p className='text-blue-950 flex border px-2 bg-gray-400 rounded-2xl font-black'>{data.ratings.map(a => <p> {a.count / 2}</p>)}</p>
                </div>
            </div>
        </div>
        </div>
        </Link>
    );
};

export default TCard;