import React from 'react';
import useLoadData from '../../Components/Hooks/useLoadData';
import { Link, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';

const Details = () => {
    const {id} = useParams()
    const {appData,loading} = useLoadData()
    const app = appData.find(p => p.id == id)
    console.log(app)
    if (!app){
        return <p>{loading}</p>
    }
    const handleAddToInstall = () => {
      const existingApp = JSON.parse(localStorage.getItem('installed'))
      let updatedApp = []
      console.log(existingApp)
      if(existingApp){
        const isDuplicate = existingApp.some(p => p.id == app.id)
        if(isDuplicate){
          return alert('Already added')
        }
        updatedApp = [...existingApp, app]
      }else{
        updatedApp.push(app)
      }
      localStorage.setItem('installed', JSON.stringify(updatedApp))
    }


   

    return (
        <div className='w-11/12 mx-auto py-5'>
            <div className="flex justify-between bg-base-100 shadow-sm">
  <figure className='w-100'>
    <img
      src={app.image}
      alt="Movie" />
  </figure>
  <div className="flex flex-col items-center gap-2">
    <h2 className="text-2xl font-semibold">{app.title}</h2>
    <h2 className="text-2xl font-semibold">Reviews: {app.reviews}</h2>
    <h2 className="text-2xl font-semibold">Downloads: {app.downloads}</h2>
    <p>{app.companyName}</p>
    <div className="">
      <Link to={`/installedApp`} onClick={()=> handleAddToInstall()} className="btn btn-primary">Install</Link>
    </div>
  </div>
</div>
<div className='space-y-3'>
                {/* chart */}
                <h1 className='font-bold text-2xl'>Ratings</h1>
                <div className="bg-base-100 border rounded-xl p-4 h-80">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={app.ratings}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={'name'} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={"count"} fill="#82ca9d" radius={[10, 10, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>
            </div>
        </div>
    );
};

export default Details;

// {/* <div className='bg-base-100 border rounded-xl p-4 h-80'>
//                    <ResponsiveContainer width="100%" aspect={1.618} maxHeight={500}>

//                 <BarChart
//        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
//       responsive
//       data={appData}
      
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="title" />
//       <YAxis width="" />
//       <Tooltip />
//       <Legend />
      
//       <Bar dataKey="reviews" fill="#82ca9d"  radius={[10, 10, 0, 0]} />
//       {/* <RechartsDevtools /> */}
//     </BarChart>
                
//                    </ResponsiveContainer>
       
//                 </div> */}