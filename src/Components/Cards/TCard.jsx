import React from 'react';
import { Link } from 'react-router';

const TCard = ({data}) => {
    
    return (
        
        <Link to={`/application/${data.id}`}>
        <div >
            <div className="card bg-base-100 w-96 shadow-sm ">
            <figure>
                <img
                    src={data.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.companyName}</h2>
                <h2 className="font-bold">{data.title}</h2>
                <p></p>
                <div className="flex justify-around ">
                   <p className='text-blue-950'>{data.downloads}</p>
                   
                   <p className='text-blue-950'>{data.ratingAvg}</p>
                </div>
            </div>
        </div>
        </div>
        </Link>
    );
};

export default TCard;