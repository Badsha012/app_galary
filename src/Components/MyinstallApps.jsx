import React from 'react';

const MyinstallApps = ({install}) => {
    return (
        <div>
                <div className="flex items-center justify-between bg-white rounded-xl border shadow p-4 hover:shadow-md transition">
      {/* Left section */}
      <div className="flex items-center  ">
        <div className="w-10 h-10 bg-gray-200 rounded-md">
            <img src={install.image} alt="" srcset="" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">
           {install.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
            <span>👥 {install.downloads} </span>
            <span>⭐ {install.ratingAvg}</span>
            <span>📦 {install.size}</span>
          </div>
        </div>
      </div>

      {/* Right section */}
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-1 rounded-md">
        Uninstall
      </button>
    </div>
        </div>
    );
};

export default MyinstallApps;