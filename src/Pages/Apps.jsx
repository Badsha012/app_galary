import React from 'react';
import { useLoaderData } from 'react-router';
import Allapps from '../Components/Allapps';

const Apps = () => {
    const allapp=useLoaderData()
    console.log(allapp);
    return (
        <div className='text-center py-10 bg-gray-100'>
            <h1 className='text-3xl font-bold'>Our All Applications</h1>
            <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>
              <h1></h1>
            </div>
            <div className='grid grid-cols-4 p-8 gap-5 py-10'>
                {
                  allapp.map(allapps=>{
                    return <Allapps key={allapps.id} allapps={allapps}></Allapps>
                  })
                }
            </div>
        </div>
    );
};

export default Apps;