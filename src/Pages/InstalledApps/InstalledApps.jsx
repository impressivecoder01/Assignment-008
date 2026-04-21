import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,} from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';


const InstalledApps = () => {
    const [installedApp, setInstalledApp] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installed'))
        if (installedApps) {
            setInstalledApp(installedApps)
        }

    }, [])
    const sortedItem = () => {
        if(sortOrder ===  'download-des'){
            return [...installedApp].sort((a, b)=> b.downloads - a.downloads)
        }
        else if(sortOrder === 'download-asc'){
            return [...installedApp].sort((a, b)=> a.downloads - b.downloads)
        }
        else{
            return installedApp
        }
    }

     const handleRemove = (id) =>{
              const existingApp = JSON.parse(localStorage.getItem('installed'))
              let updatedApp = existingApp.filter(p =>p.id != id)
      console.log(updatedApp)
      setInstalledApp(updatedApp)
     
      localStorage.setItem('installed', JSON.stringify(updatedApp))

    }
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-2xl font-semibold'>{sortedItem().length} Apps Found</h1>
                {/* <button>Sort</button> */}
                <label className='form-control max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="none">Sort by Downloads</option>
                        <option value="download-des">High-Low</option>
                        <option value="download-asc">Low-High</option>

                    </select>

                </label>

            </div>
            <div className='space-y-2'>
                {
                    sortedItem().map(app => (<div className='border flex items-center justify-around p-4 rounded-2xl border-gray-400 bg-gray-200' key={app.id} app={app}>
                        <div>
                            <img src={app.image} alt="error" />
                        </div>
                        <div>
                            <h1 className='font-semibold'>{app.companyName}</h1>
                            <div className='flex gap-6 font-medium'>
                                <p>Downloads: {app.downloads}</p>
                                <p>{app.size}MB</p>
                                <p>{app.ratingAvg}</p>
                            </div>
                        </div>
                        <div>
                            <button className='' onClick={()=> handleRemove(app.id)}>Uninstall</button>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='space-y-3'>
                {/* chart */}
                <h1 className='font-bold text-2xl'>Ratings</h1>
                <div className='bg-base-100 border rounded-xl p-4 h-80'>
                <BarChart
       style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={installedApp}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis width="" />
      <Tooltip />
      <Legend />
      
      <Bar dataKey="reviews" fill="#82ca9d"  radius={[10, 10, 0, 0]} />
      {/* <RechartsDevtools /> */}
    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;