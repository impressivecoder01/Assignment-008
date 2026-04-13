import React from 'react';

const TCard = ({data}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
    );
};

export default TCard;