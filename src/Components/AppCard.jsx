import React from 'react';

const AppCard = ({app}) => {
    console.log(app);
    return (
       <div className="card bg-base-100 w-75  shadow-sm">
  <figure>
    <img
      src={app.image}
      className="w-full h-40 object-cover rounded-md"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {app.title}
      
    </h2>
 
    <div className=" flex justify-between py-3">
      <button className="btn text-green-600"><img src="https://i.ibb.co.com/My7yPXf2/icon-downloads.png" className='br-2 w-5 h-5' alt="" srcset="" />{app.downloads}</button>
      <button className="btn text-amber-600"> <img src="https://i.ibb.co.com/Mxc8s6nY/icon-ratings.png" className='br-2 w-5 h-5' alt="" srcset="" />{app.ratingAvg}</button>
    </div>
  </div>
</div>
    );
};

export default AppCard;