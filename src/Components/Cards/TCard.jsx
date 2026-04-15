import React from 'react';

const TCard = ({data}) => {
    return (
        
        <div >
            <div className="card bg-base-100 w-96 shadow-sm ">
            <figure>
                <img
                    src="https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fhome2%2Fbanner-thumbnail.jpg&w=3840&q=75"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.companyName}</h2>
                <p>{data.description}</p>
                <div className="flex justify-around ">
                   <p className='text-blue-950'>8M</p>
                   <p className='text-blue-950'>8M</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TCard;