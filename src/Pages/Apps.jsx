


import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Allapps from "../Components/Allapps";

const Apps = () => {
  const allapp = useLoaderData() || [];
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filter apps based on title or companyName
  const filteredApps = allapp.filter((app) => {
    const text = `${app?.title || ""} ${app?.companyName || ""}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="text-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold">Our All Applications</h1>
      <p className="text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between p-10">
        <h1 className="text-xl font-semibold">
          ({filteredApps.length}) Apps Found
        </h1>
        <label className="input flex items-center border rounded px-2 py-1">
          <svg
            className="h-[1em] opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-8 gap-5 py-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((allapps) => (
            <Allapps key={allapps.id} allapps={allapps} />
          ))
        ) : (
      <div className="flex flex-col justify-center text-center items-center  ">
        <img src="https://i.ibb.co.com/ynHdJS7p/App-Error.png" alt="" className="w-72  " srcset="" />
     
       
        <h1 className="text-xl  font-semibold">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-400">The App you are requesting is not found on our system.  please try another apps</p>
        <Link to='/' className="btn bg-violet-600 text-white">Go Back!</Link>
      </div>
          
        )}
      </div>
    </div>
  );
};

export default Apps;
