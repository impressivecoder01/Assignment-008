import React from 'react';

const Details = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className="flex justify-between bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="">
    <h2 className="">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;