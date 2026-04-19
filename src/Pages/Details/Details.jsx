import React from 'react';
import useLoadData from '../../Components/Hooks/useLoadData';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const {appData,loading} = useLoadData()
    const app = appData.find(p => p.id == id)
    if (!app){
        return <p>{loading}</p>
    }
    const handleAddToInstall = () => {
      localStorage.setItem('installed', JSON.stringify(app))
    }
    return (
        <div className='w-11/12 mx-auto py-5'>
            <div className="flex justify-between bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="flex flex-col items-center gap-2">
    <h2 className="text-2xl font-semibold">{app.title}</h2>
    <h2 className="text-2xl font-semibold">Reviews: {app.reviews}</h2>
    <h2 className="text-2xl font-semibold">Downloads: {app.downloads}</h2>
    <p>{app.companyName}</p>
    <div className="">
      <button onClick={()=> handleAddToInstall()} className="btn btn-primary">Install</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;