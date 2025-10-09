


import React from "react";
import { Link } from "react-router-dom";

const Allapps = ({ allapps }) => {
  return (
    <div className="card bg-base-100 w-75 h-full shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img
          src={allapps.image}
          className="w-full h-full object-cover rounded-md"
          alt={allapps.title}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{allapps.title}</h2>

        <div className="flex justify-between py-3 mt-auto">
         
          <Link
            to={`/app/${allapps.id}`}
            className="btn text-green-600 flex items-center gap-2"
          >
            <img
              src="https://i.ibb.co.com/My7yPXf2/icon-downloads.png"
              className="br-2 w-5 h-5"
              alt=""
            />
            {allapps.downloads}
          </Link>

          <button className="btn text-amber-600 flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/Mxc8s6nY/icon-ratings.png"
              className="br-2 w-5 h-5"
              alt=""
            />
            {allapps.ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allapps;
