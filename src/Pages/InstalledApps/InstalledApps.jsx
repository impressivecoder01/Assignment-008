import React, { useEffect, useState } from 'react';

 const InstalledApps = () => {
    const [installedApp, setInstalledApp] = useState([])
    useEffect(()=> {
        const installedApps = JSON.parse(localStorage.getItem('installed'))
        if(installedApps){
            setInstalledApp(installedApps)
        }
 
    }, [])
    return (
        <div className='w-11/12 mx-auto my-5'>
           <h1 className='text-2xl font-semibold'>{installedApp.length} Apps Found</h1>
           <div className='space-y-2'>
            {
                installedApp.map(app => (<div className='border p-4 rounded-2xl border-gray-400 bg-gray-200' key={app.id} app = {app}>
            <div>
                <img src={app.image} alt="error" />
            </div>
            <div>
                <h1 className='font-semibold'>{app.companyName}</h1>
                <div className='flex gap-3 font-medium'>
                    <p>{app.downloads}</p>
                    <p>{app.size}MB</p>
                    <p>{app.ratingAvg}</p>
                </div>
            </div>
           </div>
                ))
            }
           </div>
        </div>
    );
};

export default InstalledApps;