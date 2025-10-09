import React from 'react';
import { useRouteError } from 'react-router';
import Footer from '../Components/Footer';



const Error = () => {
 

      const error = useRouteError();
  return <div>{error.message}
  <div className='flex justify-center'>
     <img src="https://i.ibb.co.com/0LJdxKV/error-404.png" alt="" srcset="" />
  </div>
  <div className='text-center'>
    <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
    <p className='text-gray-400'>The page you are looking for is not available.</p>
  </div>


  </div>;

};

export default Error;






