import React from 'react';

const AppCard = ({app}) => {
    console.log(app);
    return (
       <div className="card bg-base-100 w-75 shadow-sm">
  <figure>
    <img
      src={app.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {app.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default AppCard;