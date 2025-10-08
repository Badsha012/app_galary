import React from 'react';

const AppCard = ({app}) => {
    console.log(app);
    return (
       <div className="card bg-base-100 w-75  shadow-sm">
  <figure>
    <img
      src={app.image}
      className="w-full h-48 object-cover rounded-md"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {app.title}
      
    </h2>
 
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{app.downloads}</div>
      <div className="badge badge-outline">{app.ratingAvg}</div>
    </div>
  </div>
</div>
    );
};

export default AppCard;