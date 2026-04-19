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
        <div>
            wishlist: {installedApp.length}
        </div>
    );
};

export default InstalledApps;